"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var student_js_1 = require("./student.js");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
        this.nextId = 1;
    }
    StudentManager.prototype.addStudent = function (name, age) {
        var student = new student_js_1.Student(this.nextId++, name, age);
        this.students.push(student);
        return student;
    };
    StudentManager.prototype.listStudents = function () {
        return this.students;
    };
    StudentManager.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (student) { return student.id === id; });
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
