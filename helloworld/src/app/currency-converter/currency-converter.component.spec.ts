import {ComponentFixture, TestBed, inject } from '@angular/core/testing';

import {CurrencyConverterComponent} from './currency-converter.component';
import {AppModule} from '../app.module';
import {CurrencyConverterService} from '../services/currency-converter.service';

describe('WelcomeComponent (class only)', () => {
  let comp: CurrencyConverterComponent;
  let currService: CurrencyConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        CurrencyConverterComponent,
        { provide: CurrencyConverterService, useClass: CurrencyConverterService }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.inject(CurrencyConverterComponent);
    currService = TestBed.inject(CurrencyConverterService);
  });
});
