import {Injectable} from "@angular/core";

import {Item} from "./Item";


@Injectable()
export class itemService {

   private items : Item[] = [
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذااا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي'),
        new Item('http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg','هذا نص تجريبي')
   ];

   getItems(){
       return this.items;
   }
}