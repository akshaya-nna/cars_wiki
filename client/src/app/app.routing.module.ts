import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarsGridComponent } from './components/cars-grid/cars-grid.component';
import { CardStartComponent } from "./components/cars-grid/card-start/card-start.component";
import { CarsDetailComponent } from "./components/cars-grid/cars-detail/cars-detail.component";
import { CarDetailsFormComponent } from "./components/car-details-form/car-details-form.component";

const appRoutes:Routes = [
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'cars-grid', component: CarsGridComponent, children:[
        { path: '', component: CardStartComponent},
        { path: ':id', component: CarsDetailComponent},
        { path: ':id/edit', component: CarDetailsFormComponent }
    ] },
    { path:'form', component: CarDetailsFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}