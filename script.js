var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third')
var fourth = document.getElementById('fourth')

var result = document.getElementById('result');

first.addEventListener("input", sum);
second.addEventListener("input", sum);
third.addEventListener("input", sum);
fourth.addEventListener("input", sum);

function sum() {
var one = parseFloat(first.value) || 0;
var two = parseFloat(second.value) || 0;
var three = parseFloat(third.value) || 0;
var four = parseFloat(fourth.value) || 0;
  
var GPA = (one + two + three + four)/4;
result.innerHTML = "Your GPA is : " + GPA;
}