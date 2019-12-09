import { Component, OnInit } from '@angular/core';
import {FinnkinoService} from '../services/finnkino.service';
import {Observable} from 'rxjs';
import {News} from './news';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})
export class FinnkinoComponent implements OnInit {
  private news: News;
  private cinemaData$: Observable<News[]>;
  searchTerm: any;

  constructor(private finnkinoService: FinnkinoService) { }

  ngOnInit() {
    this.cinemaData$ = this.finnkinoService.getData();
    console.log(this.cinemaData$);
  }

}
