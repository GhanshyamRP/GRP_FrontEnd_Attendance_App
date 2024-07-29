import { Attendance } from "./attendance";

export class Entry {
    constructor(
        public id?:number,
        public type?:string,
        public time?:string,
        public att?:Attendance
    
    ){}
}
