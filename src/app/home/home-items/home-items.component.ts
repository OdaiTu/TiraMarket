import { Component, OnInit } from '@angular/core';
import {Item} from "./Item";
import {itemService} from "./item.service";

@Component({
  selector: 'tm-home-items',
  templateUrl: 'home-items.component.html',
  styleUrls: ['home-items.component.css']
})
export class HomeItemsComponent implements OnInit {

  items : Item[] = [];

  constructor(private itemservice : itemService) { }

  ngOnInit() {
    this.items = this.itemservice.getItems();
  }

}
