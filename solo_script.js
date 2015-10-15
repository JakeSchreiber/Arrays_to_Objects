var arrayAtticus = {
  name: "Atticus", 
  employeeNumber: "2405",
  baseSalary: "47000",
  reviewScore: 3};


var arrayJem = {
  name: "Jem", 
  employeeNumber: "62347", 
  baseSalary: "63500", 
  reviewScore: 4};

var arrayBoo = {
  name: "Boo", 
  employeeNumber: "11435", 
  baseSalary: "54000", 
  reviewScore: 3};

var arrayScout = {
  name: "Scout", 
  employeeNumber: "6243", 
  baseSalary: "74750", 
  reviewScore: 5};

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = {
    name: "",
    bonusPercentage: "",
    newSalary: "",
    bonusAmount: ""
  };

  newArray.name = array.name;

  var employeeNumber = array.employeeNumber;
  var baseSalary = array.baseSalary;
  var reviewScore = array.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray.bonusPercentage = bonus;
  newArray.newSalary = Math.round(baseSalary * (1.0 + bonus));
  //add Math.round
  newArray.bonusAmount = Math.round(baseSalary * bonus);
   //add Math.round
  console.log(newArray.name + " " + newArray.bonusPercentage + " " + newArray.newSalary + " " + newArray.bonusAmount);
  newArray = (newArray.name + ": " + newArray.bonusPercentage + ", " + newArray.newSalary + ", " + newArray.bonusAmount);

  return newArray;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

//basePercent - 1

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}