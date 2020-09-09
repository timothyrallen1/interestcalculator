import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyinputComponent } from './myinput/myinput.component';
import { MycardsComponent } from './mycards/mycards.component';

const routes: Routes = [
  { path: 'myinput', component: MyinputComponent },
  { path: 'mycards', component: MycardsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
