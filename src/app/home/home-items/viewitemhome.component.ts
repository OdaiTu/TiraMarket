import {Component, OnInit, Input} from '@angular/core';
import {Item} from "./Item";

@Component({
  selector: 'tm-viewitemhome',
  templateUrl: 'viewitemhome.component.html',
  styleUrls : ['viewitemhome.component.css']
})
export class ViewitemhomeComponent implements OnInit {

  @Input() item : Item;

  constructor() { }

  ngOnInit() {
  }

}
