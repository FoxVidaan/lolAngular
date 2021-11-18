import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import {HttpClientModule} from "@angular/common/http";
import { AddModalComponent } from './layouts/add-modal/add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
