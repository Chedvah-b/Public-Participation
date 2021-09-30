import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor(private service:ServiceService) { }

  data=this.service.listOfhazards;

    dataToDisplay: any= this.data.filter(item => item.topic/*type*/ === "publicBuildings");
  dataByCategory: any=this.dataToDisplay;
  noInitialState=false;
  isClicked = [true,false,false,false];
  ngOnInit(): void {


  }


  onDisplayClick = ((event: any, displayType: string, index:number)=> {
    for(var i=0;i<this.isClicked.length;i++){
      this.isClicked[i]=false;
    }
    this.isClicked[index]=true;
    console.log(this.isClicked)
    this.noInitialState=true;
    this.dataToDisplay=this.data.filter(element=>element.topic/*type*/==displayType);
    this.dataByCategory=this.dataToDisplay;
  });
  
  onDateChange = ((event: any) => {
    this.dataByCategory=this.dataToDisplay.filter((item: any) => item.date === event.target.value)
  })

  onAddressChange = ((event: any) => {
    this.dataByCategory = this.dataToDisplay.filter((item: any) => item.street === event.target.value)
  });

  status = ((index: number) => this.isClicked[index])
}

export class item{
  img:string;
  subject:string;
  street:string;
  likes:number;
  dislikes:number;
  counter:number
  constructor(img:string,subject:string,street:string,likes:number,dislikes:number,counter:number){
    this.img=img;
    this.street=street;
    this.dislikes=dislikes;
    this.likes=likes;
    this.subject=subject;
    this.counter=counter
  }
}


