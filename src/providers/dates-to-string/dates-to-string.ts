import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DatesToStringProvider {
  constructor() {}

  getDatesString( date: Date ): string {
    var fullDateSeconds = 86400000;
    let dateTimeNow = new Date('June 08, 2018 03:24:00');
    let daysPassed = Math.round(Math.abs((date.getTime() - dateTimeNow.getTime())/(fullDateSeconds)));
  
    if(daysPassed > 20){
      return "עדכני נכון ל " + this.toStringDate(date) ;
    } else if(daysPassed > 4) {
      return "עודכן לפני " + daysPassed + " ימים";
    } else if(daysPassed == 3){
      return "עודכן לפני שלושה ימים" ;
    } else if(daysPassed == 2){
      return "עודכן לפני יומיים";
    } else if(daysPassed == 1){
      return "עודכן אתמול";
    } else if(daysPassed == 0){
      return "עודכן היום";
    }  
  }
  
private toStringDate( date: Date){
  return this.pad(date.getDate()) + "/" + this.pad(date.getMonth()+1) + "/" + date.getFullYear();
}

private pad(n) {
  return n < 10 ? "0"+ n : n;
}
  
}
