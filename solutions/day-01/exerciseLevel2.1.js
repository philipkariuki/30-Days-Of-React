// Q1 Write a code which can give grades to students according to theirs scores:
//                          80-100, A
//                          70-89, B
//                          60-69, C
//                          50-59, D
//                          0-49, F

function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score < 80) {
        return 'B';
    } else if (score >= 60 && score < 70) {
        return 'C';
    } else if (score >= 50 && score < 60) {
        return 'D';
    } else if (score >= 0 && score < 50) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

let scores = [85, 72, 67, 54, 45];
let grades = scores.map(getGrade);
console.log(grades); // ['A', 'B', 'C', 'D', 'F']

