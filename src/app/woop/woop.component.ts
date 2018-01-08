import { Component, OnInit } from '@angular/core';
import {WoopService} from "../shared/woop.service";
import {Woop} from "../shared/woop.model";

@Component({
  selector: 'app-woop',
  templateUrl: './woop.component.html',
  styleUrls: ['./woop.component.css']
})
export class WoopComponent implements OnInit {

  title = "Display WOOP";
  woops : Woop[];
  selectedWish : Woop

  selectWish(chosenWish){
    this.selectedWish = chosenWish;
  }
  constructor(private woopService:  WoopService) { }

  ngOnInit() {
    this.loadWishes();
  }

  loadWishes(){
   this.woopService.loadWishes().subscribe(wishes =>  this.woops = wishes) ;
  }

  deleteWish(chosenWish){
    console.log('deleting wish' , chosenWish);
    this.woopService.deleteWish(chosenWish)
      .subscribe(response =>{
        this.resetWish();
        this.loadWishes();
      });
  }

  saveWish(chosenWish){
    console.log('saving wish' , chosenWish);
    this.woopService.saveWish(chosenWish)
      .subscribe(response => {
        this.loadWishes();
        this.resetWish();
      });
  }

  resetWish(){
    console.log('resetting wish');
    const emptyWish ={id : null , wish : " " , outcome : " "};
    this.selectedWish = emptyWish ;
  }
}
