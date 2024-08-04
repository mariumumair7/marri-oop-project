import { Student } from './student.js';

export class StudentManager {
  private students: Student[] = [];
  private nextId = 1;

  addStudent(name: string, age: number): Student {
    const student = new Student(this.nextId++, name, age);
    this.students.push(student);
    return student;
  }

  listStudents(): Student[] {
    return this.students;
  }

  removeStudent(id: number): boolean {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  }
}
