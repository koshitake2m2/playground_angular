import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLib1Module } from 'my-lib1';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyLib1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
