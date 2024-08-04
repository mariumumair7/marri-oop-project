#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var studentManager_js_1 = require("./studentManager.js");
var manager = new studentManager_js_1.StudentManager();
var mainMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'list',
                        name: 'action',
                        message: 'What do you want to do?',
                        choices: ['Add Student', 'List Students', 'Remove Student', 'Exit'],
                    },
                ])];
            case 1:
                answers = _b.sent();
                _a = answers.action;
                switch (_a) {
                    case 'Add Student': return [3 /*break*/, 2];
                    case 'List Students': return [3 /*break*/, 4];
                    case 'Remove Student': return [3 /*break*/, 5];
                    case 'Exit': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 8];
            case 2: return [4 /*yield*/, addStudent()];
            case 3:
                _b.sent();
                return [3 /*break*/, 8];
            case 4:
                listStudents();
                return [3 /*break*/, 8];
            case 5: return [4 /*yield*/, removeStudent()];
            case 6:
                _b.sent();
                return [3 /*break*/, 8];
            case 7:
                console.log('Goodbye!');
                return [2 /*return*/];
            case 8: return [4 /*yield*/, mainMenu()];
            case 9:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var addStudent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, student;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Enter student name:',
                    },
                    {
                        type: 'input',
                        name: 'age',
                        message: 'Enter student age:',
                        validate: function (input) {
                            var age = parseInt(input, 10);
                            return !isNaN(age) && age > 0 ? true : 'Please enter a valid age.';
                        },
                    },
                ])];
            case 1:
                answers = _a.sent();
                student = manager.addStudent(answers.name, parseInt(answers.age, 10));
                console.log("Student added: ".concat(student.id, ", ").concat(student.name, ", ").concat(student.age));
                return [2 /*return*/];
        }
    });
}); };
var listStudents = function () {
    var students = manager.listStudents();
    if (students.length === 0) {
        console.log('No students found.');
    }
    else {
        students.forEach(function (student) {
            console.log("".concat(student.id, ": ").concat(student.name, ", ").concat(student.age, " years old"));
        });
    }
};
var removeStudent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, success;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Enter student ID to remove:',
                        validate: function (input) {
                            var id = parseInt(input, 10);
                            return !isNaN(id) && id > 0 ? true : 'Please enter a valid ID.';
                        },
                    },
                ])];
            case 1:
                answers = _a.sent();
                success = manager.removeStudent(parseInt(answers.id, 10));
                if (success) {
                    console.log('Student removed successfully.');
                }
                else {
                    console.log('Student not found.');
                }
                return [2 /*return*/];
        }
    });
}); };
mainMenu();
