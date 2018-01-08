import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
   selector : 'app-woop-details',
  templateUrl : './woop-details.component.html',
  styleUrls :['./woop-details.component.css']

})
export class WoopDetailsComponent{
  chosenWish;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  originalWish;

   @Input() set selectedWish(selWish){
     if(selWish){
       this.originalWish = selWish;
     }
     this.chosenWish = Object.assign({} , selWish);
   }

}
