import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { WeatherService } from './weather/Service/Weather.service';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { FutureWeatherComponent } from './weather/future-weather/future-weather.component';
@NgModule({
  declarations: [	
    AppComponent,
      WeatherComponent,
      CurrentWeatherComponent,
      FutureWeatherComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
