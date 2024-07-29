import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private route:Router,private serv:DataService){}
  ngOnInit(){
    console.log("At Login Page");
  }

  gotolog(){
   this.route.navigate(['login']);
  }

  register(data:User){
    console.log(data);
    this.serv.addUser(data).subscribe(data=>{
      console.log("User Added to db"+data);
      this.gotolog();
    })
  }
}
