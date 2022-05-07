import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherComponent} from '../app/weather/weather.component';
export const allAppRoutes: Routes = [
  { path: '', component: WeatherComponent }
];

