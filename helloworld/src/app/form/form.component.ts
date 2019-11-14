import { Component, OnInit } from '@angular/core';
import {Person} from './person';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person;

  /*form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    termsAndConditions: new FormControl(Validators.required)
  });*/

  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onSave(form) {
    console.log(form.value.firstName);
  }

}
