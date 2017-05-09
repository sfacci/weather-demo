import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRouterModule } from './shared/app-routing.module';
import { HeaderComponent } from './header/header.component';

import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';

import { KelvinToCelsius } from './shared/kelvin-to-celsius.pipe';
import { RoundDecimal } from './shared/round-decimal.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    KelvinToCelsius,
    RoundDecimal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
