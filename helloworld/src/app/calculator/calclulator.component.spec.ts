import {ComponentFixture, TestBed, inject } from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';
import {AppModule} from '../app.module';

describe('CalculatorComponent (with beforeEach)', () => {
  let comp: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({declarations: [CalculatorComponent]});
    fixture = TestBed.createComponent(CalculatorComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
  });

  it('should create', () => {
    expect(comp).toBeDefined();
  });

  it('#addValue should do some shit', () => {
    comp.addValue('1+2');
    comp.addValue('=');
    expect(comp.result).toEqual(3);
  });
});
