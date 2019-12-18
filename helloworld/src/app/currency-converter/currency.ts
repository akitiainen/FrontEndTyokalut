export class Currency {
  rates: string;
  base: string;
  date: string;

  constructor(rates?: string, base?: string, date?: string) {
    this.rates = rates;
    this.base = base;
    this.date = date;
  }
}
