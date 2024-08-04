#! /usr/bin/env node


import inquirer from 'inquirer';
import { StudentManager } from './studentManager.js';

const manager = new StudentManager();

const mainMenu = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: ['Add Student', 'List Students', 'Remove Student', 'Exit'],
    },
  ]);

  switch (answers.action) {
    case 'Add Student':
      await addStudent();
      break;
    case 'List Students':
      listStudents();
      break;
    case 'Remove Student':
      await removeStudent();
      break;
    case 'Exit':
      console.log('Goodbye!');
      return;
  }

  await mainMenu();
};

const addStudent = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter student name:',
    },
    {
      type: 'input',
      name: 'age',
      message: 'Enter student age:',
      validate: (input: string) => {
        const age = parseInt(input, 10);
        return !isNaN(age) && age > 0 ? true : 'Please enter a valid age.';
      },
    },
  ]);

  const student = manager.addStudent(answers.name, parseInt(answers.age, 10));
  console.log(`Student added: ${student.id}, ${student.name}, ${student.age}`);
};

const listStudents = () => {
  const students = manager.listStudents();
  if (students.length === 0) {
    console.log('No students found.');
  } else {
    students.forEach(student => {
      console.log(`${student.id}: ${student.name}, ${student.age} years old`);
    });
  }
};

const removeStudent = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Enter student ID to remove:',
      validate: (input: string) => {
        const id = parseInt(input, 10);
        return !isNaN(id) && id > 0 ? true : 'Please enter a valid ID.';
      },
    },
  ]);

  const success = manager.removeStudent(parseInt(answers.id, 10));
  if (success) {
    console.log('Student removed successfully.');
  } else {
    console.log('Student not found.');
  }
};

mainMenu();
