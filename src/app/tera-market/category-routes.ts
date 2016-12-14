import {Routes} from "@angular/router";
import {CarsComponent} from "./cars/cars.component";
import {CommercialComponent} from "./commercial/commercial.component";
import {ImmovablesComponent} from "./immovables/immovables.component";
import {ElectronicsComponent} from "./electronics/electronics.component";
import {FurnitureComponent} from "./furniture/furniture.component";
import {AnimalsComponent} from "./animals/animals.component";
import {OthersComponent} from "./others/others.component";
import {UserstateComponent} from "../user/userstate/userstate.component";
import {ViewProductComponent} from "./view-product/view-product.component";
import {AddOfferComponent} from "../user/add-offer/add-offer.component";

export  const  CATEGORY_ROUTES : Routes = [

  {path: 'cars' , component: CarsComponent},
  {path: 'commercial',component:CommercialComponent},
  {path: 'immovables',component:ImmovablesComponent},
  {path: 'electronic',component:ElectronicsComponent},
  {path: 'furniture',component:FurnitureComponent},
  {path: 'animals',component:AnimalsComponent},
  {path: 'others',component:OthersComponent},
  {path: 'login' , component:UserstateComponent},
  {path:'view-product' ,component:ViewProductComponent},
  {path:'add-offer',component:AddOfferComponent}
];
