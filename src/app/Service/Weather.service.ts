import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Weather } from '../Model/Weather';

@Injectable()
export class WeatherService {
  private weather:Weather[] = [] ;
    private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = "&units=metric&APPID=abe1eb51289c21c167c66ce790c2fac3";
 private firsturl ="https://api.openweathermap.org/data/2.5/onecall?lat";

  constructor(private http: HttpClient) { }

  public async GetIndianCities()
  {
    debugger;
      return await this.http.get("assets/assets/data/cities.json");
        //  .map((response: Response) => <any>response.json());
  }
 public async getWeather(latitude:any,longitude:any ){
    let first ='https://api.openweathermap.org/data/2.5/onecall?lat='
    let lonurl ='&lon=';
    let lat = latitude;
    let lon =longitude;
    let secondurl = '&exclude=hourly,minutely&units=metric&appid=55c40e4620cf406c4da275f197704ad7';
    return this.http.get(first+  lat+lonurl+lon+secondurl) 
    // return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
     
      
  }
  public getWeatherByCity(city:any){
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
  }
}