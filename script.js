var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third')
var fourth = document.getElementById('fourth')

var arrayOfAllInputs = [first, second, third, fourth];
var arrayOfGrades = [];


var result = document.getElementById('result');


first.addEventListener("input", sum);
second.addEventListener("input", sum);
third.addEventListener("input", sum);
fourth.addEventListener("input", sum);


function upperCaseAndGradePoint(a){
var gradeBook = {"A+" : 4.0, "A" : 4.0, "A-" : 3.7, "B+" : 3.3, "B" : 3.0, "B-" : 2.7, "C+" : 2.3, "C" : 2.0, "C-" : 1.7, "D+" : 1.3, "D" : 1.0, "D-" : 0.7, "E" : 0};
var grade = a.toUpperCase();
var gradePoint = gradeBook[grade];
return gradePoint;
}

function sum() {
for(i = 0; i < arrayOfAllInputs.length; i++){
  if(arrayOfAllInputs[i].value != 0){
    arrayOfGrades.push(arrayOfAllInputs[i]);
  }
}
var totalInputs = arrayOfGrades.length;
var totalGradePoint = 0;
for(i = 0; i < totalInputs; i++){
totalGradePoint+=upperCaseAndGradePoint(arrayOfGrades[i].value);
}
var GPA = totalGradePoint/totalInputs;

if(isNaN(GPA)){
  test.innerHTML = "Please enter valid letter grades as inputs";
}
result.innerHTML = "Your GPA is : " + GPA;
}