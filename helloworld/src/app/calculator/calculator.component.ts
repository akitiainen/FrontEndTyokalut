import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  buttons: string[] = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '/', '='];
  result: any;

  constructor() {
  }

  ngOnInit() {
    this.result = '';
  }

  addValue(value: string) {
    if (value === '=') {
      this.result = eval(this.result);
    } else if (value === 'C') {
      this.result = '';
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {

      if (this.result.endsWith('+') || this.result.endsWith('-') || this.result.endsWith('/') || this.result.endsWith('*')) {
      } else {
        this.result += value;
      }
    } else {
      this.result += value;
    }
  }
}
