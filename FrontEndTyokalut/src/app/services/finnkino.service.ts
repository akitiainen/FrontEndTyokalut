import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from '../finnkino/news';
import {map} from 'rxjs/operators';
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class FinnkinoService {

  private url: string;
  articles: Array<any>;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/News';
    // this.articles = [new News('shaun the sheep', '1.1.2011', 'autisminäytös',
     // 'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg')];
  }

  getData(): Observable<any> {
    return this.httpClient
      .get(this.url, {responseType: 'text'})
      .pipe(
        map(response => {
          let articles: [] = [];
          parseString(response, {
            trim: true,
            explicitArray: false,
            mergeAttrs: true
          }, function(err, result) {
            // console.log('getXMLData' + response);
            articles = result.News.NewsArticle;
          });
          return articles;
        }));
  }
}
