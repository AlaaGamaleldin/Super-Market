import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container/container.component';
import { NavComponent } from './nav/nav/nav.component';
import { FrishFoodComponent } from './frish-food/frish-food.component';
import { GrossrayComponent } from './grossray/grossray.component';
import { HomeEquopmentComponent } from './home-equopment/home-equopment.component';
import { FroutsComponent } from './frouts/frouts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    FrishFoodComponent,
    GrossrayComponent,
    HomeEquopmentComponent,
    FroutsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
