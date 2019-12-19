import {Component, OnInit} from '@angular/core';
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
  newValue: string;
  rate: number;

  constructor(private currencyService: CurrencyConverterService) {
    this.baseCurrency = 'EUR';
    this.newCurrency = 'USD';
  }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe(response => {
      this.currencies = Object.keys(response.rates);
      console.log(this.currencies);
      this.currencies.unshift('EUR');
    });
  }

  getRates() {
    if (this.baseCurrency === this.newCurrency) {
      this.newValue = this.baseValue.toString();
    } else {
      this.currencyService.get(this.baseCurrency, this.newCurrency).subscribe(response => {
        this.currency = response;
        console.log(response);
        this.CalculateRate();
      });
    }
  }

  swapCurrencies() {
    const tmpCurrency = this.newCurrency;
    this.newCurrency = this.baseCurrency;
    this.baseCurrency = tmpCurrency;
    this.rate = 1 / this.rate;
    if (this.baseValue === undefined) {
    } else {
      this.newValue = (this.baseValue * this.rate).toFixed(2);
    }
  }

  CalculateRate() {
    this.rate = Number(Object.values(this.currency.rates));
    this.newValue = (this.baseValue * this.rate).toFixed(2);
  }
}
