import { Injectable } from '@angular/core';
import {Question} from '../feedback/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Array<Question>;

  constructor() {
    this.questions = [new Question('Kysymys 1'),
    new Question('Kysymys 2'),
    new Question('Kysymys 3')];
  }

  getQuestions(): Array<Question> {
    return this.questions;
  }
}
