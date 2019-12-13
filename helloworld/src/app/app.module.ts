import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatMenuModule, MatSidenavModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { FinnkinoComponent } from './finnkino/finnkino.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import 'hammerjs';

export interface DialogData {
  email: string;
  password: string;
}

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,
    FormComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    FinnkinoComponent,
    SearchFilterPipe,
    AdminComponent,
    AuthComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
