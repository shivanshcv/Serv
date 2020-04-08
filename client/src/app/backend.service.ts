import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public url:string="http://localhost:2000/";
  public sharedData:Object;

  constructor(private http:HttpClient,private router:Router) { }

  inquire(obj:Object){
    console.log("maa chuda");
    
    localStorage.setItem("sharedData",JSON.stringify(obj));
    this.http.post(this.url+"inquire",obj).subscribe((data)=>{
      console.log(data);
      
    })
  }

sendEmail(obj:Object)
{
  return this.http.post(this.url+"inquiries/sendmail",obj);
}

isLoggedIn():boolean{
  
  if(localStorage.getItem("id"))
   { 
   
     return true;
  
     }  else
    return false;
}
login(obj:Object):Observable<any>{
  let m= this.http.post(this.url+"login",obj);
  
  return m;
  
}
allInquiries():Observable<any[]>
{
  return this.http.get<any[]>(this.url+"inquiries");
  
    
}
}
