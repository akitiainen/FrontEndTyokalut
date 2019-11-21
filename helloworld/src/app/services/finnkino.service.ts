import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinnkinoService {

  constructor() { }

  getData(): Observable<any> {
    return;
  }
}
