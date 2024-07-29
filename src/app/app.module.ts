import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';
import { NavComponent } from './comp/nav/nav.component';
import { HomeComponent } from './comp/home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './comp/report/report.component';
import { UserlistComponent } from './comp/userlist/userlist.component';
import { LogComponent } from './comp/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    ReportComponent,
    UserlistComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
