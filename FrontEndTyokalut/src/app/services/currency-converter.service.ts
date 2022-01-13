import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Currency} from '../currency-converter/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private urlBase: string;
  private urlSymbol: string;
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.exchangerate.host/latest';
    this.urlBase = 'https://api.exchangerate.host/latest?base=';
    this.urlSymbol = '&symbols=';
  }

  get(base, symbol): Observable<any> {
    return this.httpClient.get(this.urlBase + base + this.urlSymbol + symbol)
      .pipe(map(response => {
          return response;
        })
      );
  }

  getCurrencies(): Observable<Currency> {
    return this.httpClient.get(this.url)
      .pipe(map(response => {
        return response as Currency;
      }));
  }
}
