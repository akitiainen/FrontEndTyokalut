export class Person {
  firstName: string;
  lastName: string;
  id: any;
  email: string;
  userName: string;
  password: string;

  constructor(firstName?: string, lastName?: string, id?: any, email?: string, userName?: string, password?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
    this.userName = userName;
    this.password = password;
  }
}

