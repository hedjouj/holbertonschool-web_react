interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
 }
let student1: string = "?";
let student2: string = "?";

let studentList: (string | string)[] = [student1, student2];

console.log("No types errors found")
