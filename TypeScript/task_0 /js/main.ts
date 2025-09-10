interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
 }
let student1: string = "jean";
let student2: string = "michelmichel";

let studentList: (string | string)[] = [student1, student2];

console.log("No types errors found")
