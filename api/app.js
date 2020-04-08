var express=require('express');
var app=express();
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var nodemailer=require('nodemailer');
var cors=require('cors');
var Schema=mongoose.Schema;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

mongoose.connect('mongodb://localhost:27017/mean', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

var userSchema=Schema({
    name:String,
    email:String,
    contactNumber:Number,
    message:String
});
var employee=Schema({
    email:String,
    password:String
});
var User=mongoose.model('User',userSchema);


var Employee=mongoose.model("Employee",employee);


app.post('/inquire',function(req,res){
    
    
    User.create(req.body,function(err,createdUser){
        if(err)
            console.log(err);
        else
        {
            console.log("user inquiry done");
        }
            
    })
})
app.post("/login",function(req,res){
    Employee.findOne({email:req.body.email},function(err,foundEmployee){
        if(!foundEmployee)
        {
        
            res.json({"id":""});
        }
        else{
            if(foundEmployee.password===req.body.password)
            {
                
                
                res.json({"id":foundEmployee._id});
            }
            else
            {
                
                
                res.json({"id":""});
            }
        }
    })
})

app.get("/inquiries",function(req,res){
    var inquiries=[];
    User.find({},function(err,allUsers){
        if(err)
            console.log(err);
        else
        {
            allUsers.forEach(oneUser=> {
                inquiries=inquiries.concat(oneUser);
                
                
            });
            res.json(inquiries);
        }
    })
})

app.post("/inquiries/sendmail",(req,res)=>{
    console.log("req came");
    let user=req.body;
    sendMail(user,info=>{
        console.log("the mail has been sent");
    });

    
});

async function sendMail(user,callback){
    let transporter=nodemailer.createTransport({
        service:"gmail",
        port:587,
        secure:false,
        auth:{
            user:"shivansh.cv12@gmail.com",
            pass:"Shivanshkrcv@1205"
        }

    });
    let mailOptions={
        from:"Shivansh",
        to:user.email,
        subject:"Welcome",
        html:`<h1>Hi${user.name}</h1><br>
        <h4>Thanks for reaching us, allow us 48 hours to get back to you</h4>`
    };
    let info=await transporter.sendMail(mailOptions);
    callback(info);
}
app.listen(2000,function(){
    console.log("SERVER RUNNING ON PORT 2000");
    
})