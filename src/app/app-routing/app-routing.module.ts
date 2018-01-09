import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {IphoneComponent} from '../iphone/iphone.component';
import { SmartphoneComponent } from '../smartphone/smartphone.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { IpadComponent } from '../ipad/ipad.component';
import { TabletComponent } from '../tablet/tablet.component';
import { ApplianceComponent } from '../appliance/appliance.component';
import { TelevisionComponent } from '../television/television.component';


const routes: Routes = [
  {
      path: '',
      component: IphoneComponent,
  },
  {
    path: 'smartphone-route',
    component: SmartphoneComponent,
  },
  {
    path: 'laptop-route',
    component: LaptopComponent,
  },
  {
    path: 'ipad-route',
    component: IpadComponent,
  },
  {
    path: 'tablet-route',
    component: TabletComponent,
  },
  {
    path: 'appliances-route',
    component: ApplianceComponent,
  },
  {
    path: 'television-route',
    component: TelevisionComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
