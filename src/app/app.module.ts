import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { MyWebsite1Component } from './my-website1/my-website1.component';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    MyWebsiteComponent,
    MyWebsite1Component,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
