import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { HomeItemsComponent } from './home/home-items/home-items.component';
import { ViewitemhomeComponent } from './home/home-items/viewitemhome.component';
import {itemService} from "./home/home-items/item.service";
import { FooterComponent } from './footer/footer.component';
import { TeraMarketComponent } from './tera-market/tera-market.component';
import { HeaderComponent } from './tera-market/header/header.component';
import {routing} from "./app.routes";
import { HomeComponent } from './home/home.component';
import { ItemViewStructureComponent } from './tera-market/item-view-structure/item-view-structure.component';
import { CarsComponent } from './tera-market/cars/cars.component';
import { ImmovablesComponent } from './tera-market/immovables/immovables.component';
import { ElectronicsComponent } from './tera-market/electronics/electronics.component';
import { FurnitureComponent } from './tera-market/furniture/furniture.component';
import { AnimalsComponent } from './tera-market/animals/animals.component';
import { CommercialComponent } from './tera-market/commercial/commercial.component';
import { OthersComponent } from './tera-market/others/others.component';
import { StartcategoryComponent } from './tera-market/startcategory.component';
import { DropdownDirective } from './tera-market/dropdown.directive';
import { MsgStructureComponent } from './tera-market/msg/msg-structure/msg-structure.component';
import { MsgComponent } from './tera-market/msg/msg/msg.component';
import { NotificationstrutureComponent } from './tera-market/notifications/notificationstruture/notificationstruture.component';
import { UserstateComponent } from './user/userstate/userstate.component';
import { ViewProductComponent } from './tera-market/view-product/view-product.component';
import { AddOfferComponent } from './user/add-offer/add-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    HomeItemsComponent,
    ViewitemhomeComponent,
    FooterComponent,
    TeraMarketComponent,
    HeaderComponent,
    HomeComponent,
    ItemViewStructureComponent,
    CarsComponent,
    ImmovablesComponent,
    ElectronicsComponent,
    FurnitureComponent,
    AnimalsComponent,
    CommercialComponent,
    OthersComponent,
    StartcategoryComponent,
    DropdownDirective,
    MsgStructureComponent,
    MsgComponent,
    NotificationstrutureComponent,
    UserstateComponent,
    ViewProductComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [itemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
