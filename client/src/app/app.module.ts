import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarsGridComponent } from './components/cars-grid/cars-grid.component';
import { AppRoutingModule } from './app.routing.module';
import { CardsComponent } from './components/cars-grid/cards/cards.component';
import { SingleCardComponent } from './components/cars-grid/cards/single-card/single-card.component';
import { CarsDetailComponent } from './components/cars-grid/cars-detail/cars-detail.component';
import { CardStartComponent } from './components/cars-grid/card-start/card-start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarsGridComponent,
    CardsComponent,
    SingleCardComponent,
    CarsDetailComponent,
    CardStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
