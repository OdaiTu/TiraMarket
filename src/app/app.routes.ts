import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {TeraMarketComponent} from "./tera-market/tera-market.component";
import {CarsComponent} from "./tera-market/cars/cars.component";
import {CommercialComponent} from "./tera-market/commercial/commercial.component";
import {ImmovablesComponent} from "./tera-market/immovables/immovables.component";
import {ElectronicsComponent} from "./tera-market/electronics/electronics.component";
import {AnimalsComponent} from "./tera-market/animals/animals.component";
import {OthersComponent} from "./tera-market/others/others.component";
import {FurnitureComponent} from "./tera-market/furniture/furniture.component";
import {CATEGORY_ROUTES} from "./tera-market/category-routes";

const  APP_ROUTES : Routes = [
     { path : '' , redirectTo : '/home' , pathMatch : 'full'},
     { path : 'home' , component : HomeComponent},
     { path : 'tera-market' , component: TeraMarketComponent, children : CATEGORY_ROUTES}

];

export const  routing = RouterModule.forRoot(APP_ROUTES);
