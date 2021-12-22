import {ComponentFixture, TestBed, tick } from '@angular/core/testing';

import {CurrencyConverterComponent} from './currency-converter.component';
import {AppModule} from '../app.module';
import {CurrencyConverterService} from '../services/currency-converter.service';

let comp: CurrencyConverterComponent;
let fixture: ComponentFixture<CurrencyConverterComponent>;
let currencyService: CurrencyConverterService;

describe('CurrencyConverterComponent', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          AppModule
        ],
        providers: [CurrencyConverterComponent,
          {provide: CurrencyConverterService, useClass: CurrencyConverterService}]
      });
    comp = TestBed.inject(CurrencyConverterComponent);
  });
});
