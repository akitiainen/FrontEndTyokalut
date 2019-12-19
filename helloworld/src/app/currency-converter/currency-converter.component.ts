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
  baseCurrency: string;
  newCurrency: string;
  baseValue: number;
  newValue: number;

  constructor(private currencyService: CurrencyConverterService) {
  }

  ngOnInit() {
    this.getCurrencies();
  }

  setBase(base) {
    this.baseCurrency = base;
  }

  setSymbol(symbol) {
    this.newCurrency = symbol;
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe(response => {
      this.currencies = Object.keys(response.rates);
      this.currencies.unshift('EUR');
    });
  }

  getRates() {
    this.currencyService.get(this.baseCurrency, this.newCurrency).subscribe(response => {
      this.currency = response;
      console.log(this.currency);
      this.CalculateRate();
    });
  }

  CalculateRate() {
    const rate = Number(Object.values(this.currency.rates));
    this.newValue = this.baseValue * rate;
  }
}
