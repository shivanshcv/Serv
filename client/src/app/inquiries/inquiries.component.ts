import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {
  public inquiries:any[];
  constructor(private router:Router,private bs:BackendService) { }

  async ngOnInit() {
    
    let m=await this.bs.allInquiries().subscribe((data)=>{
      this.inquiries=data;
      
      
    });
  }

   acknowledge(s1:string,s2:string){
    this.bs.sendEmail({email:s1,_id:s2}).subscribe(async(data)=>{
      this.ngOnInit();
      
    });
  
    

  }
  submit(){
    localStorage.removeItem("id");
    this.router.navigateByUrl("/login")
  }



}
