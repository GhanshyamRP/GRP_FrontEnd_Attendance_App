import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  
  public username:any=null;
  public role:any=null;

constructor(private route:Router){}

  ngOnInit(){
    this.username =sessionStorage.getItem('username');
   
  }

  logout(){
    sessionStorage.clear();
      this.route.navigate(['login']);
  }
}
