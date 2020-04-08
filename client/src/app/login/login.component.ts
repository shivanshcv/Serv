import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required])


    
  });
  constructor(private bs:BackendService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm.setValue({email:null,password:null})
  }
async submit(){
  if(!this.loginForm.valid)
  {
    
    alert("Form is not Valid");
    this.ngOnInit();
    this.router.navigateByUrl("login");
    
  }
  
  this.bs.login(this.loginForm.value).subscribe((data)=>{
    localStorage.setItem("id",data['id']);
    this.router.navigateByUrl("/inquiries")
    
  })
}
}
