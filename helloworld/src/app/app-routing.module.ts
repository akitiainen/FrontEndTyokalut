import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {FormComponent} from './form/form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FinnkinoComponent} from './finnkino/finnkino.component';
import {AuthComponent} from './auth/auth.component';
import {AdminComponent} from './admin/admin.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'form', component: FormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'finnkino', component: FinnkinoComponent},
  {path: 'login', component: AuthComponent},
  {path: 'admin', component: AdminComponent},
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
