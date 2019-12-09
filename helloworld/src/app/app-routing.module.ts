import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {FormComponent} from './form/form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FinnkinoComponent} from './finnkino/finnkino.component';

const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'form', component: FormComponent},
  {path: 'finnkino', component: FinnkinoComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
