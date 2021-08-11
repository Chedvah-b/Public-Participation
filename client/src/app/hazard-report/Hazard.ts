import { User } from "./User";

export class Hazard{

topic:string;
address:string;
addressNumber:number;
subject:string
description:string;
picture:string;
date:Date;
send:User;
constructor(topic:string,address:string,addressNumber:number,subject:string,description:string,picture:string,date:Date,user:User){

this.topic=topic;
this.address=address;
this.addressNumber=addressNumber;
this.subject=subject;
this.description=description;
this.picture=picture;
this.date=date;
this.send=user;

}

}