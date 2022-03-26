
function rangeComparison(expression) {

  if (expression.includes('<=')) {
    let number = expression.split(" ")[0];
    let comparison = parseFloat(expression.split(" ")[2].split("").filter(item => Number.isInteger(parseFloat(item))).join(''));
    return number <= comparison;
  }
  else if (expression.includes('>=')) {
    let number = expression.split(" ")[0];
    let comparison = parseFloat(expression.split(" ")[2].split("").filter(item => Number.isInteger(parseFloat(item))).join(''));
    return number >= comparison;
  }

}

function numberOperations(expression) {

  let number = parseInt(expression.split("")[0]);
  return number + 1;

}

function valueInArray(expression) {

  let value = expression.split(" ")[0];
  let array = expression.substring(value.length);
  return array.includes(value);

}

function conditional(expression) {

  let sentence = expression.split(" ")[1].split('==');
  let value1 = expression.split(" ")[3];
  let value2 = expression.split(" ")[5];
  if(sentence[0] == sentence[1]) {
    return value1;
  } else {
    return value2;
  }
}

function stringComparison(expression) {

  let firstSentence = expression.split(" ")[0].split('==');
  if(firstSentence[0] == firstSentence[1]) {
    return true;
  } else {
  return false;
  }

}

function doubleAndComparison(expression) {

  let firstSentence = expression.split(" ")[0].split('==');
  let firstResult = firstSentence[0] == firstSentence[1];
  
  let secondSentence = expression.split(" ")[2].split('==');
  let secondResult = secondSentence[0] == secondSentence[1];
  
  if(firstResult && secondResult) {
    return true;
  } else {
  return false;
  }

}

function tripleAndComparison(expression) {

  let firstSentence = expression.split(" ")[0].split('==');
  let firstResult = firstSentence[0] == firstSentence[1];
  
  let secondSentence = expression.split(" ")[2].split('==');
  let secondResult = secondSentence[0] == secondSentence[1];
  
  let thirdSentence = expression.split(" ")[4].split('==');
  let thirdResult = thirdSentence[0] == thirdSentence[1];
  
  if(firstResult && secondResult && thirdResult) {
    return true;
  } else {
  return false;
  }

}

function doubleOrComparison(expression) {

  let firstSentence = expression.split(" ")[0].split('==');
  let firstResult = firstSentence[0] == firstSentence[1];

  let secondSentence = expression.split(" ")[2].split('==');
  let secondResult = secondSentence[0] == secondSentence[1];
  
  if(firstResult || secondResult) {
    return true;
  } else {
  return false;
  }

}

function tripleOrComparison(expression) {

  let firstSentence = expression.split(" ")[0].split('==');
  let firstResult = firstSentence[0] == firstSentence[1];
  
  let secondSentence = expression.split(" ")[2].split('==');
  let secondResult = secondSentence[0] == secondSentence[1];
  
  let thirdSentence = expression.split(" ")[4].split('==');
  let thirdResult = thirdSentence[0] == thirdSentence[1];
  
  if(firstResult || secondResult || thirdResult) {
    return true;
  } else {
  return false;
  }

}

module.exports = {
  rangeComparison,
  numberOperations,
  valueInArray,
  doubleAndComparison,
  tripleAndComparison,
  doubleOrComparison,
  tripleOrComparison,
  stringComparison,
  conditional
}