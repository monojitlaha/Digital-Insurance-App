import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabsModule} from 'ngx-bootstrap';
import {IphoneComponent} from './iphone/iphone.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { IpadComponent } from './ipad/ipad.component';
import { TabletComponent } from './tablet/tablet.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { TelevisionComponent } from './television/television.component';


@NgModule({
  declarations: [
    AppComponent,
    IphoneComponent,
    SmartphoneComponent,
    LaptopComponent,
    IpadComponent,
    TabletComponent,
    ApplianceComponent,
    TelevisionComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
