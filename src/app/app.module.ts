import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinRegExampleComponent } from './lin-reg-example/lin-reg-example.component';
import { CarService } from './shared/services/car/car.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LinRegExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
