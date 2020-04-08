import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {
  public inquiries:any[];
  constructor(private router:Router,private bs:BackendService) { }

  ngOnInit(): void {
    let m=this.bs.allInquiries().subscribe((data)=>{
      this.inquiries=data;
    });
  }

  acknowledge(){
    this.bs.sendEmail({email:"shivanshkumar1205@gmail.com"}).subscribe(
      data=>{
        console.log("mail gya");
        
      },
      err=>{
        console.log(err);
        
      }
    )
    

  }
  submit(){
    localStorage.removeItem("id");
    this.router.navigateByUrl("/login")
  }



}
