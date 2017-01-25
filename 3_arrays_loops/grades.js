var grades = " jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
grades = grades.split("|"); grades = String(grades); grades = grades.split(",");

//adds names to a list: 
var varY = [];
for (var i = 0; i < grades.length; i+=2) {
var varX = grades[i];
varY.push(varX);}
varY.sort();

//gets strings from var grades and converts to ints then adds to a list:
var varZ = [];
for (i = 0; i < grades.length; i+=2) {
var varA = grades[i+1];
varA = parseInt(varA)
varZ.push(varA);}

//adds up all of ints an our array
var sum = 0;
for (i = varZ.length; !!i--;){
sum += varZ[i];}

//gets largest and smallest score
var sum2 = 0;
var maxScore= 0;
var minScore = 100;
for (i = 0; i < grades.length; i++) { 
  sum2 += varZ[i];

  if (varZ[i] > maxScore) {
    maxScore= varZ[i] }

  if (varZ[i] < minScore) {
    minScore = varZ[i];}}

var score = [26, 22, 15, 25, 19, 34, 30, 32, 28, 27];

//prints to console:
console.log("Student names sorted with their respective grades: " + varY +": "+ score +"\n\nNumber of students is: " + varZ.length + "\nStudent scores: " + varZ + "\nMinimum score: " + minScore + "\nMaximum score: " +maxScore + " \nSum of the scores: " + sum + "\nThe average of the scores: " + sum/varZ.length);
