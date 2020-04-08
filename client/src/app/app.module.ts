import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { InquiriesComponent } from './inquiries/inquiries.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryComponent,
    DetailsComponent,
    LoginComponent,
    InquiriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
