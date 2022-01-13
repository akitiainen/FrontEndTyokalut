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

  setFeedback(value: number) {
    if (value === 0) {
      this.answer = 'Ei vielä arvosteltu';
    }
    if (value === 1) {
      this.answer = this.values[0];
    }
    if (value === 2) {
      this.answer = this.values[1];
    }
    if (value === 3) {
      this.answer = this.values[2];
    }
  }
}
