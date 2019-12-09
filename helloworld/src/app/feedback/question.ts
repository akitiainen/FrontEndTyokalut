export class Question {
  static counter: number = 1;

  id: number;
  title: string;
  answer: string;
  values: Array<string> = ['Huono', 'OK', 'Hyvä'];

  constructor(msg: string) {
    this.id = Question.counter++;
    this.title = msg;
    this.answer = 'Ei vielä arvosteltu';
  }

  setFeedback() {

  }
}
