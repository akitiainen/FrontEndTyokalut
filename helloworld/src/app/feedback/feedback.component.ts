import { Component, OnInit } from '@angular/core';
import {Question} from './question';
import {QuestionsService} from '../services/questions.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  questions: Question[];
  value: number;

  constructor(private questionService: QuestionsService) {
  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  onValueChange(event, question: Question) {
    question.setFeedback(event.value);
    console.log(event.value);
  }

}
