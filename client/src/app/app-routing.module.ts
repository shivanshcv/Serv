import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquiryComponent } from './inquiry/inquiry.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { LoggedInGuardService } from './logged-in-guard.service';
import { GuardLoggedInService } from './guard-logged-in.service';
import { AppComponent } from './app.component';
// import { NotLoggedInGuardService } from './not-logged-in-guard.service';


const routes: Routes = [
  {path:'',component:InquiryComponent},
  {path:'inquire',component:InquiryComponent},
  
  {path:'login',component:LoginComponent,canActivate:[GuardLoggedInService]},
  {path:'inquiries',component:InquiriesComponent,canActivate:[LoggedInGuardService]},
  {path:'inquire/details',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
