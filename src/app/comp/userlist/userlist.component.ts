import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  public userlist:User[]=[]

  constructor(private route:Router,private serv:DataService){}

  ngOnInit(){

    let x =sessionStorage.getItem('username');
    if(x!=null && !sessionStorage.getItem('y') ){
      document.location.reload();
     sessionStorage.setItem('y',"1");
    }

   this.serv.getalluser().subscribe(data=>{
        this.userlist = data;
   })
  }

  gotoycomp(i:any){
    this.route.navigate(['myreport/'+i]);
  }


}
