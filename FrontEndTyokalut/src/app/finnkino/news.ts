export class News {
  title: string;
  date: string;
  content: string;
  image: string;

  constructor(title?: string, date?: string, content?: string, image?: string) {
    this.title = title;
    this.date = date;
    this.content = content;
    this.image = image;
  }
}
