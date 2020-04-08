import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public data:Object;

  constructor(public bs:BackendService,private router:Router) { }

  async ngOnInit(){
    this.data=JSON.parse(localStorage.getItem("sharedData"));
    console.log(this.data);
    
    
    
  }

  submit(){
    localStorage.removeItem("sharedData");
    this.router.navigateByUrl("/")
   
  }

}
