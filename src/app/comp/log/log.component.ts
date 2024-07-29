import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from 'src/app/class/attendance';
import { Entry } from 'src/app/class/entry';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  public att:Attendance  = new Attendance();
  public currentTime: any='';
  public lastentry:any= null;
  constructor(private route:Router,private serv:DataService){}

  ngOnInit(){
    let x =sessionStorage.getItem('username');
    if(x!=null && !sessionStorage.getItem('y') ){
      document.location.reload();
     sessionStorage.setItem('y',"1");
    }
    
    this.gettodaydata();

    this.updateTime();
    setInterval(() => this.updateTime(), 1000); 

    const delay = this.getDelayUntilEigntPM();
    console.log(delay)
    setTimeout(() => this.callFunction(), delay);
  }
  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  }

  gettodaydata(){
    let eid = sessionStorage.getItem('id');
    console.log(eid);
      this.serv.gettodaydata(eid).subscribe(data=>{
        this.att = data;
        console.log("Data found")
        console.log(data)
        let entlst = data.entrylst
        let x;
        if(entlst!=null){
          x = entlst.length
        console.log('entry list length :'+entlst.length)
        this.lastentry =0;
        }
        if(entlst!=null && x!=null) {
          this.lastentry = entlst[x-1].type;
          console.log(this.lastentry)
        }
        
      })
    }

    callFunction(): void {
      console.log('Function called at 9:00 PM');
      this.signOut();
    }
  
    getDelayUntilEigntPM() : number{
      const now = new Date();
      const EightPM = new Date();
      EightPM.setHours(20, 0, 0); 
      
      if (now.getTime() > EightPM.getTime()) {
        EightPM.setDate(EightPM.getDate() + 1);
      }
      return EightPM.getTime() - now.getTime();
    }


  signIn(){
    let e = new Entry();
    e.time = this.currentTime;
    e.type="Sign In"
    e.att=this.att;
    console.log(e);
    this.serv.updatesigntime(e).subscribe(data=>{
      console.log("signin time updated");
    })

  }
  signOut(){
    let e = new Entry();
    e.time = this.currentTime;
    e.type="Sign Out"
    e.att=this.att;
    console.log(e);
    this.serv.updatesigntime(e).subscribe(data=>{
      console.log("signOut time updated");
    })
  }

  gotomyreport(){
      let id =sessionStorage.getItem('id')
    this.route.navigate(['myreport',id]);
  }
}
