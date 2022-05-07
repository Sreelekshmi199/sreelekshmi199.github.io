import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{CitiesList} from './Model/CityList';
import { WeatherService } from '../weather/Service/Weather.service';
import { Weather } from './Model/Weather';
import { CityData } from './Model/CityData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather:Weather;
  Cities: CityData[];
 citiesList = CitiesList;
  keyword = 'name';
  CityName:CityData = new CityData();
  WeatherData:Weather = new Weather();
  WeatherDescription: any;
  Temperature: any;
  FeelsLike: any;
  Country: any;
  CitySearched: any;
  CitiesDataList: { id: string; name: string; state: string; }[];
  humidity: any;
  Pressure: any;
  windspeed: any;
  latitude: any;
  longitude: any;
  CurrentDate: Date;
  longData: Object | undefined;
  sunrise: any;
  sunset: any;
  nighttemp: any;
  Morningtemp: any;
  mondayicon: any;
  tuenighttemp: any;
  tueMorningtemp: any;
  tueicon: any;
  wednighttemp: any;
  wedMorningtemp: any;
  wedicon: any;
  thunighttemp: any;
  thuMorningtemp: any;
  thuicon: any;
  frinighttemp: any;
  friMorningtemp: any;
  friicon: any;
  satMorningtemp: any;
  saticon: any;
  satnighttemp: any;
  sunicon: any;
  sunMorningtemp: any;
  sunnighttemp: any;
  constructor(private weatherSer:WeatherService, private route:ActivatedRoute) { }
  weatherClass:Weather;
  location:any = {};
 async ngOnInit() {
  console.log(CitiesList)
  this.CitiesDataList = CitiesList;
  this.CurrentDate = new Date();
  //await this.getCurrentlocation();
//  await this.GetWeatherByCity();
  }
 async getCurrentlocation(data:any)
  {
    let {lat, lon} = data.coord;
   
        
  this.latitude =lat;
    this.longitude  = lon;
  
  }
// async GetIndianCities()
// {
//   debugger;
  
//   return (await this.weatherSer.GetIndianCities()).toPromise().then
//   (data => {
//     this.Cities = data as CityData[];
//     console.log(this.Cities)
//   });
// }
async getlatlong()
  {
    return (await this.weatherSer.getWeatherByCity(this.CityName.name)).toPromise().then(
      async data=>
      {
        this.longData =data;
      await  this.getCurrentlocation(this.longData);
        await this.GetWeatherByCity();
  
      }
      
    )
  }
async GetWeatherByCity()
 {
if(this.latitude==null|| this.latitude==undefined|| this.longitude==undefined||this.longitude==null)
{
  this.getlatlong();
}
else{


 return (await this.weatherSer.getWeather(this.latitude,this.longitude)).toPromise().then(
  data =>{
    this.WeatherData=data as any;
    this.showWeatherData(this.WeatherData);
  this.showweekData(this.WeatherData);
  this.showtueData(this.WeatherData);
  this.showwedData(this.WeatherData);
  this.showthuData(this.WeatherData);
  this.showfriData(this.WeatherData);
  this.showsatData(this.WeatherData);
  this.showsunData(this.WeatherData);
 console.log(this.WeatherData);
  })
}
//  return this.WeatherData;
}
 showWeatherData (data:any){
  let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;
  this.humidity = humidity;
  this.Pressure = pressure;
  this.windspeed =wind_speed;
  this.sunrise = sunrise;
  this.sunset = sunset;
  
  

}
showweekData(data:any)
{
let {day,eve,max,min,morn,night} =data.daily[0].temp;
this.nighttemp = night;
this.Morningtemp = morn;
let {icon} = data.daily[0].weather[0];
this.mondayicon = icon;
}
showtueData(data:any)
{
let {day,eve,max,min,morn,night} =data.daily[1].temp;
this.tuenighttemp = night;
this.tueMorningtemp = morn;
let {icon} = data.daily[1].weather[0];
this.tueicon = icon;
}
showwedData(data:any)
{
  let {day,eve,max,min,morn,night} =data.daily[1].temp;
  this.wednighttemp = night;
  this.wedMorningtemp = morn;
  let {icon} = data.daily[1].weather[0];
  this.wedicon = icon;
}
showthuData(data:any)
{
  let {day,eve,max,min,morn,night} =data.daily[1].temp;
  this.thunighttemp = night;
  this.thuMorningtemp = morn;
  let {icon} = data.daily[1].weather[0];
  this.thuicon = icon;
}
showfriData(data:any)
{
  let {day,eve,max,min,morn,night} =data.daily[1].temp;
  this.frinighttemp = night;
  this.friMorningtemp = morn;
  let {icon} = data.daily[1].weather[0];
  this.friicon = icon;
}
showsatData(data:any)
{
  let {day,eve,max,min,morn,night} =data.daily[1].temp;
  this.satnighttemp = night;
  this.satMorningtemp = morn;
  let {icon} = data.daily[1].weather[0];
  this.saticon = icon;
}
showsunData(data:any)
{
  let {day,eve,max,min,morn,night} =data.daily[1].temp;
  this.sunnighttemp = night;
  this.sunMorningtemp = morn;
  let {icon} = data.daily[1].weather[0];
  this.sunicon = icon;
}
selectEvent(item:any) {

  // alert(item)
  // do something with selected item
}

onChangeSearch(search: string) {
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused(e:any) {
  // do something
}

}