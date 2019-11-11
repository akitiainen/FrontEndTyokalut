import { Component, OnInit } from '@angular/core';
import {Person} from './person';
import {FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person;

  form = new FormGroup({
    firstName: new FormControl('')
  });

  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onSave() {}

}
