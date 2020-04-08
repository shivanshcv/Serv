import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { BackendService } from './backend.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {

  constructor(private bs:BackendService,private router:Router) { }
  canActivate():any{
    if(this.bs.isLoggedIn()) 
      return true;
    else
    {
      alert("Please Login First");
      this.router.navigateByUrl("/login");
      return false;
    }
    }
}
