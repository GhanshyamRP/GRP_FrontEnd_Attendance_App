import { Entry } from "./entry";
import { User } from "./user";

export class Attendance {
    constructor(
        public id?:number,
        public date?:Date,
	    public entrylst?:Entry[],
        public user?:User
    ){}
}
