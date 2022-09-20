export default class Course {
  name;

  code;

  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  toString() {
    return `${this.code}-${this.name}`;
  }
}
