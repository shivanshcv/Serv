import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router'
import { formatNumber } from '@angular/common';
import { phoneNumberValidator } from '../validators/phone-validator'
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  
  inquiryForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(2),
      Validators.maxLength(30)]),

    email:new FormControl(null,[Validators.email,Validators.required]),
    
    contactNumber:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),phoneNumberValidator]),
    
    message:new FormControl(null,[Validators.required,Validators.maxLength(100)])
  })
  get mobile() {
    return this.inquiryForm.get('contactNumber');
  }


  constructor(private bs:BackendService,private router:Router) { }


  ngOnInit(): void {
    this.inquiryForm.setValue({name:null,email:null,contactNumber:null,message:null})
  }

  async submit(){
    if(!this.inquiryForm.valid)
    {
      console.log("form not valid");
      alert("Form is not Valid");
      this.ngOnInit();
      this.router.navigateByUrl("/");
      
    }
    else
    {
     
      this.bs.inquire(this.inquiryForm.value);
      await new Promise(r => setTimeout(r, 500));
      this.router.navigateByUrl("/inquire/details");
      
      
      
      
    }
  }

}
