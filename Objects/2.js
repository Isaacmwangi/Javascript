var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Before deleting:", student);
delete student.rollno;
console.log("After deleting:", student);
