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

  /*data=[{img:'https://www.kolhair.co.il/wp-content/uploads/2019/10/66ed55d5c485aa58a4e3f2929e873b5e-845x634.jpg' , subject:'מעבר חציה מסכן חיי אדם', street: "לואי ליפסקין",likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-29"},
  {img:'https://previews.123rf.com/images/gasparij/gasparij1611/gasparij161100023/66533557-burnt-and-melted-trash-can-form-a-fire-burned-trash-in-waste-container-in-the-city-is-melted-due-to-.jpg' , subject:'ונדליזם בשכונה', street: "מינץ",likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-29"},
  {img:'assets/careWorks.jpg', subject:'עבודות טיפוח המרחב הציבורי', street: 'רח\' רקנאטי והכיכר של מפגש אצ"ג/אידלזון',likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-29"},
  {img:'https://previews.123rf.com/images/jimj0will/jimj0will1708/jimj0will170800017/85329213-potholed-and-broken-pavement-in-essex-uk.jpg', subject:'כביש שבור', street: "סולם יעקב",likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-28"},
  {img:'https://img.wcdn.co.il/f_auto,q_auto,w_1400,t_54/1/3/7/8/1378920-46.jpg', subject:'יעוד שטח ציבורי שאינו תואם את אופי הרחוב', street: "רביבים",likes:15,dislikes:10,type:"openSpace",date:"2021-06-27"},
  {img:'https://cdn.shopify.com/s/files/1/0344/6469/files/Cat_stuck_in_tree.jpg?v=1589230322', subject:'חיות בר משוטטות', street:'קהילות שו"ם',likes:15,dislikes:10,type:"openSpace",date:"2021-06-26"},
  {img:'https://www.kolhair.co.il/wp-content/uploads/2019/10/0f2b8fa71c8dc86e1c05af5c17b5f0f2-845x634.jpg',subject:'חידוש כביש',street:'זריצקי',likes:15,dislikes:10,type:'buisnessAreas',date:"2021-06-08"},
  {img:'https://www.ynet.co.il/PicServer5/2017/06/07/7830652/Image12.jpg',subject:'חידוש רחוב',street:'זריצקי',likes:15,dislikes:10,type:'openSpace',date:"2021-06-08"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830654/Image26.jpg',subject:'גיזום עצים',street:'קהילות שו"ם',likes:15,dislikes:10,type:'openSpace',date:"2021-06-02"},
  {img:'https://www.kolhair.co.il/wp-content/uploads/2019/10/c408116860e87cded6aa570bc0d4123a-845x1127.jpg',subject:'שדרוג רחוב',street:'סולם יעקב',likes:15,dislikes:10,type:'urbanReneral',date:"2021-06-02"},
  {img:'https://www.ynetespanol.com/picserver/mynet/wcm_upload/wcm_mynet_pic/crop_images/2019/10/07/516397/460080_0_0_1600_1200_large.jpg',subject:'שדרוג רחובות',street:'רביבים',likes:15,dislikes:10,type:'urbanReneral',date:"2021-06-04"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830650/Image11.jpg',subject:'ריבוד כביש',street:'לואי ליפסקין',likes:15,dislikes:10,type:'urbanReneral',date:"2021-06-04"},
  {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ramot_polin.jpg/250px-Ramot_polin.jpg' , subject:'מעבר חציה מסכן חיי אדם', street: "לואי ליפסקין",likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-29"},
  {img:'https://anglocdn.mipo.co.il/images/nadlan/06/y3y29pjRh1oCC9ljWycw_15087533206720.jpg' , subject:'ונדליזם בשכונה', street: "מינץ",likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-29"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830641/Image3.jpg', subject:'כביש שבור', street: "סולם יעקב",likes:15,dislikes:10,type:"publicBuildings",date:"2021-06-28"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830647/Image8.jpg', subject:'יעוד שטח ציבורי שאינו תואם את אופי הרחוב', street: "רביבים",likes:15,dislikes:10,type:"openSpace",date:"2021-06-27"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830643/Image5.jpg', subject:'חיות בר משוטטות', street:'קהילות שו"ם',likes:15,dislikes:10,type:"openSpace",date:"2021-06-26"},
  {img:'https://www.kolhair.co.il/wp-content/uploads/2019/10/0f2b8fa71c8dc86e1c05af5c17b5f0f2-845x634.jpg',subject:'חידוש כביש',street:'זריצקי',likes:15,dislikes:10,type:'buisnessAreas',date:"2021-06-08"},
  {img:'https://www.ynet.co.il/PicServer5/2017/06/07/7830652/Image12.jpg',subject:'חידוש רחוב',street:'זריצקי',likes:15,dislikes:10,type:'buisnessAreas',date:"2021-06-08"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830654/Image26.jpg',subject:'גיזום עצים',street:'קהילות שו"ם',likes:15,dislikes:10,type:'buisnessAreas',date:"2021-06-02"},
  {img:'https://www.kolhair.co.il/wp-content/uploads/2019/10/c408116860e87cded6aa570bc0d4123a-845x1127.jpg',subject:'שדרוג רחוב',street:'סולם יעקב',likes:15,dislikes:10,type:'openSpace',date:"2021-06-02"},
  {img:'https://www.ynetespanol.com/picserver/mynet/wcm_upload/wcm_mynet_pic/crop_images/2019/10/07/516397/460080_0_0_1600_1200_large.jpg',subject:'שדרוג רחובות',street:'רביבים',likes:15,dislikes:10,type:'openSpace',date:"2021-06-04"},
  {img:'https://images1.ynet.co.il/PicServer5/2017/06/07/7830650/Image11.jpg',subject:'ריבוד כביש',street:'לואי ליפסקין',likes:15,dislikes:10,type:'openSpace',date:"2021-06-04"}]
*/
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


