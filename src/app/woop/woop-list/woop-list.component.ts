import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
  selector : 'app-woop-list',
  templateUrl : './woop-list.component.html',
  styleUrls : ['./woop-list.component.css']
})
export class WoopListComponent{
  @Input() woopList;
  @Output() selected = new EventEmitter();
  @Output() delete = new EventEmitter();
}
