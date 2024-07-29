import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from 'src/app/class/attendance';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public att:Attendance[] = [];
  public id:any = '';
  public date = new Date();

  constructor(private route:ActivatedRoute, private serv:DataService){}
  ngOnInit(){
      this.route.paramMap.subscribe(data=>{
          this.id = data.get('id')
          console.log(this.id);
      })

      this.serv.getmydata(this.id).subscribe(data2=>{
        this.att=data2;
        console.log("Data fetched");
        console.log(data2);
      })
  }

}
