import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyinputComponent } from './myinput/myinput.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MycardsComponent } from './mycards/mycards.component';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyinputComponent,
    MycardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
