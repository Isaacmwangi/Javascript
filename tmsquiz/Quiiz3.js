
//a function
function checkGrade(totalMarks, examType) {
    if (examType == 'Final' && totalMarks >= 90) {
    //here my code is trying to analyse the input from user and check if it meets the condition to award an A+ Grade in the final Exam
//same strategy for the following cases
        console.log( "checkGrade("+totalMarks +" " + examination+ "),  Excellent job, you got an A+ in Your Final Exam");
    } else if (totalMarks >= 89 && totalMarks <= 100) {
        console.log( "checkGrade("+totalMarks +" " + examination+ "), Excellent job, you got an A+.");

    } else if (totalMarks >= 80 && totalMarks <= 88) {
        console.log( "checkGrade("+totalMarks +" " + examination+ "), Good job, you got an A.");

    } else if (totalMarks >= 75 && totalMarks <= 79) {
        console.log( "checkGrade("+totalMarks +" " + examination+ "), Well done, you got a B+.");

    } else if (totalMarks >= 70 && totalMarks <= 74) {
        console.log( "checkGrade("+totalMarks +" " + examination+ "), Nice work, you got a B.");

    } else if (totalMarks >= 60 && totalMarks <= 69) {
        console.log( "checkGrade("+totalMarks +" " + examination+ "),  You got a C.");

    } else {
        console.log( "checkGrade("+totalMarks +" " + examination+ "), You need to improve.");

    }
}

//decraring variables to hold imputs from user, ofcourse these are the Marks they scored
//the input is converted to integer to be specific
let a = parseInt(prompt('Enter Your Unit A score'));
let b = parseInt(prompt('Enter Your Unit B score'));
let c = parseInt(prompt('Enter Your Unit C score'));
let d = parseInt(prompt('Enter Your Unit D score'));
let examination = parseInt(prompt('Enter the examination type (1 for Final or  2 for Midterm; Kindly select either or 2):'));


let final='Final'
let midterm='Midterm'
console.log('Choose between the following');

console.log('1:  ' + final);
console.log('2:  ' + midterm);

let totalMarks = a + b + c + d;


if (examination=='1') {
    examination=final    
}
else if (examination=='2') {
    examination=midterm    
}

else{
    console.log('Incorrect input, Please select correct value (1 or 2)')

}


console.log(checkGrade(totalMarks, examination));
