import {ComponentFixture, TestBed, inject } from '@angular/core/testing';

import {CurrencyConverterComponent} from './currency-converter.component';
import {AppModule} from '../app.module';
import {CurrencyConverterService} from '../services/currency-converter.service';
import {HttpClient} from '@angular/common/http';

class MockService {
  currencies = ['EUR', 'USD'];

  getCurrencies() {
    return this.currencies;
  }
}

describe('CurrencyConverterComponent', () => {
  let comp: CurrencyConverterComponent;
  let currService: CurrencyConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        CurrencyConverterComponent,
        { provide: CurrencyConverterService, useClass: MockService }
      ]
    });
    comp = TestBed.inject(CurrencyConverterComponent);
    currService = TestBed.inject(CurrencyConverterService);
  });

  it('should create', () => {
    expect(comp).toBeDefined();
  });

  /* it('should get currencies', () => {
    comp.getCurrencies();
    expect(comp.currencies).toBe(['EUR', 'USD']);
  }); */
});
