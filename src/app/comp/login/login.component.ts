import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Err } from 'src/app/class/err';
import { Login } from 'src/app/class/login';
import { User } from 'src/app/class/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public errmsg:Err= new Err();
  public u1:User = new User();

  constructor(private route:Router,private serv:DataService){}
  
  ngOnInit(){
    console.log("At Login Page");
    let x =sessionStorage.getItem('username');
    if(x==null &&  !sessionStorage.getItem('lg')  ){
      document.location.reload();
      sessionStorage.setItem('lg',"1");
      history.pushState(null,'');
    }
  }
  gotoreg(){
   this.route.navigate(['register']);
  }
  login(data:Login){
    console.log(data);
    if(data.username=="admin" && data.password=="admin"){
      sessionStorage.setItem('username',"Admin");
      this.route.navigate(['userlst']);
    }else{
      this.serv.login(data).subscribe(data1=>{
        console.log(data1);
         if('username' in data1 && 'id' in data1 && data1.username!=null && data1.id!=null){
           console.log("User Found"+data1);
           sessionStorage.setItem('username',data1.username);
           sessionStorage.setItem('id',data1.id?.toString());
           this.u1=data1;
             this.route.navigate(['log']);
         }else if('msg' in data1 && data1.msg!=null){
           this.errmsg = data1;
           console.log(this.errmsg);
         }
       })
    }

    

  }

}
