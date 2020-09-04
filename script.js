var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var prevGPAButton = document.getElementById('prevGPAButton');
var hiddenInputOfPrevGPA = document.getElementById('prevGPA');
var hiddenInputOfPrevCredits = document.getElementById('prevCredits');
var firstCredit = document.getElementById('firstCredit');
var secondCredit = document.getElementById('secondCredit');
var thirdCredit = document.getElementById('thirdCredit');
var fourthCredit = document.getElementById('fourthCredit');

var testCount = document.getElementById('testCount');

var result = document.getElementById('result');

hiddenInputOfPrevGPA.addEventListener("input", sum);
hiddenInputOfPrevCredits.addEventListener("input",sum);
first.addEventListener("input", sum);
firstCredit.addEventListener("input", sum);
second.addEventListener("input", sum);
secondCredit.addEventListener("input", sum);
third.addEventListener("input", sum);
thirdCredit.addEventListener("input", sum);
fourth.addEventListener("input", sum);
fourthCredit.addEventListener("input", sum);

function add(){
  hiddenInputOfPrevGPA.type="text";
  hiddenInputOfPrevCredits.type="text";
  prevGPAButton.type="hidden";
}
function upperCaseAndGradePoint(a){
var gradeBook = {"A+" : 4.0, "A" : 4.0, "A-" : 3.7, "B+" : 3.3, "B" : 3.0, "B-" : 2.7, "C+" : 2.3, "C" : 2.0, "C-" : 1.7, "D+" : 1.3, "D" : 1.0, "D-" : 0.7, "E" : 0};
var grade = a.toUpperCase();
var gradePoint = gradeBook[grade];
return gradePoint;
}

function sum() {
var arrayOfAllInputs = [first, second, third, fourth];
var arrayOfCreditsInitial = [firstCredit, secondCredit, thirdCredit, fourthCredit];
var arrayOfGrades = [];
var arrayOfCreditsFinal = [];
var totalGradePoint;
var totalCredits;
for(i = 0; i < arrayOfAllInputs.length; i++){
  if((arrayOfAllInputs[i].value != 0) && (arrayOfCreditsInitial[i] != 0)){
    arrayOfGrades.push(arrayOfAllInputs[i].value);
    arrayOfCreditsFinal.push(arrayOfCreditsInitial[i].value);
  }
}
var totalInputs = arrayOfGrades.length;
if(hiddenInputOfPrevGPA.value.length == 0 && hiddenInputOfPrevCredits.value.length == 0){
  totalGradePoint = 0;
  totalCredits = 0;
}
else{
  totalGradePoint = hiddenInputOfPrevGPA.value * hiddenInputOfPrevCredits.value;
  totalCredits = parseInt(hiddenInputOfPrevCredits.value);
}
for(i = 0; i < totalInputs; i++){
totalGradePoint = totalGradePoint + (upperCaseAndGradePoint(arrayOfGrades[i])) * parseInt(arrayOfCreditsFinal[i]);
totalCredits = parseInt(totalCredits) + parseInt(arrayOfCreditsFinal[i]);
// testCount.innerHTML =  "Total Credits: " + totalCredits + " Total Grade Point: " + totalGradePoint;
} 
var GPA = totalGradePoint/totalCredits;

result.innerHTML = "Your GPA is : " + GPA;
}