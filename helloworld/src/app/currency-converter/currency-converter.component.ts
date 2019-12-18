import { Component, OnInit } from '@angular/core';
import {CurrencyConverterService} from '../services/currency-converter.service';
import {Currency} from './currency';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  currency: Currency;
  currencies: string[];
  rates: any;
  baseCurrency: string;
  newCurrency: string;

  constructor(private currencyService: CurrencyConverterService) {
    /* this.currencies = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF',
      'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD',
      'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'
     ]; */
  }

  ngOnInit() {
  }

  setBase(base) {
    this.baseCurrency = base;
  }

  setSymbol(symbol) {
    this.newCurrency = symbol;
  }

  getRates() {
    this.currencyService.getRates().subscribe(response => {
      this.currency = response;
      let currencies = JSON.stringify(this.currency.rates);
      console.log(currencies);
    });
  }

  getRate() {
    this.currencyService.get(this.baseCurrency, this.newCurrency).subscribe(response => {
      this.currency = response;
      // console.log(this.currency);
      this.parseRate();
    });
  }

  parseRate() {
    let rateFinal: string;
    rateFinal = JSON.stringify(this.currency.rates);
    console.log(rateFinal);
    console.log();
  }
}
