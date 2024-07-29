import { Injectable } from '@angular/core';
import { Login } from '../class/login';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { Err } from '../class/err';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../class/attendance';
import { Entry } from '../class/entry';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private userurl:string = "http://localhost:8080/user";
  private loginurl:string = "http://localhost:8080/login";
  private atturl:string = "http://localhost:8080/attendance";
  private entryurl:string = "http://localhost:8080/entry";

  constructor(private http:HttpClient){}

  public addUser(user:any){
      return this.http.post(this.userurl+"/add",user);
  }

  public login(log:Login):Observable<User | Err>{
        return this.http.post<User |  Err>(this.loginurl,log);
  }

  public gettodaydata(id:any):Observable<Attendance>{
      return this.http.get<Attendance>(this.atturl+"/"+id)
  }

  public getmydata(id:any):Observable<Attendance[]>{
    return this.http.get<Attendance[]>(this.atturl+"/list/"+id)
  }

  public updatesigntime(x:Entry){
    return this.http.post(this.entryurl+"/add", x);
  }


  public getalluser():Observable<User[]>{
    return this.http.get<User[]>(this.userurl+"/list")
  }

}
