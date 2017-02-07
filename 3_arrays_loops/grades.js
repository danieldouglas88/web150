var grades = " jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
grades = grades.split("|"); grades = String(grades); grades = grades.split(",");

//adds names and numbers to a list as well as converts string parts to ints, as well as adds up the latter ints: 
var varY = []; var varZ = [];
for (var i = 0; i < grades.length; i+=2) {
var varX = grades[i];
varY.push(varX);
varY.sort();
var varA = grades[i+1];
varA = parseInt(varA)
varZ.push(varA); }
var sum = varZ[0] + varZ[1] + varZ[2] + varZ[3] + varZ[4] + varZ[5] + varZ[6] + varZ[7] + varZ[8] + varZ[9];

//gets largest and smallest score
var sum2 = 0; var maxScore= 0; var minScore = 100;
for (i = 0; i < grades.length; i++) { 
  sum2 += varZ[i];

  if (varZ[i] > maxScore) {
    maxScore= varZ[i] }

  if (varZ[i] < minScore) {
    minScore = varZ[i];}}

console.log("Student names sorted with their respective grades: " + varY + ": "+ varZ +","+"\n\nNumber of students is: " + varZ.length + 
            "\nStudent scores: " + varZ + "\nMinimum score: " + minScore + "\nMaximum score: " + maxScore + " \nSum of the scores: " + sum + "\nThe average of the scores: " + sum/varZ.length);
