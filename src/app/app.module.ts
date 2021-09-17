import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TituloComponent } from './titulo/titulo.component';

import { LayoutModule  } from './layout/layout.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
