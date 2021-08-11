import { Component, OnInit } from '@angular/core';
import { project } from './project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 a="20%";

  pro:project[]=[new project("חידוש רחוב רקאנטי","העירייה מקדמת פרויקט לחידוש ושדרוג רחוב הרצל, הכולל חידוש תשתיות, שדרוג המרחב הציבורי, מבני ציבור ושטחים ירוקים.","חידוש תשתיות ביוב",0,0,"חידוש מדרכות וריהוט רחוב",0,0,"שדרוג גינות ציבוריות וגינות משחקים",0,0,"חידוש אשכול גני הילדים",0,0,"הטמנת רשת החשמל",0,0,"../../../assets/pic_7_gallery.jpg")];

  constructor() {
    
   }
   like(item:project,num:number){
    switch(num) {
        case 1:
        item.category1_like++;
        break;
        case 2:
          item.category2_like++;
          break;
          case 3:
            item.category3_like++;
            break;
            case 4:
              item.category4_like++;
              break;
              case 5:
                item.category5_like++;
                break;
    }
     }

     unLike(item:project,num:number){
      switch(num) {
          case 1:
          item.category1_unLike++;
          break;
          case 2:
            item.category2_unLike++;
            break;
            case 3:
              item.category3_unLike++;
              break;
              case 4:
                item.category4_unLike++;
                break;
                case 5:
                  item.category5_unLike++;
                  break;
      }
  }

  ngOnInit(): void {

  }

}
