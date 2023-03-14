import { NgModule } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstComponent } from './myfirst/myfirst.component';
import { PersonComponent } from './person/person.component';
import { Person2Component } from './person2/person2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponent,
    PersonComponent,
    Person2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
