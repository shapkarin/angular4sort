import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { OrderByPipe } from './app.sort'

@NgModule({
  imports:      [
    BrowserModule
    //,FormsModule
  ],
  declarations: [
    OrderByPipe,
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
