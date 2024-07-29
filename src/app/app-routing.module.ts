import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';
import { HomeComponent } from './comp/home/home.component';
import { LogComponent } from './comp/log/log.component';
import { ReportComponent } from './comp/report/report.component';
import { UserlistComponent } from './comp/userlist/userlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"log",component:LogComponent},
  {path:"myreport/:id",component:ReportComponent},
  {path:"userlst",component:UserlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
