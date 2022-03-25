function rangeComparison (expression) {

  if (expression.includes('<=')) {
    let number = expression.split(" ")[0];
    console.log(number);
    let comparison = parseFloat(expression.split(" ")[2].split("").filter(item => Number.isInteger(parseFloat(item))).join(''));
    console.log(comparison)
    return number <= comparison;
  } else if (expression.includes('>=')) {
    let number = expression.split(" ")[0];
    console.log(number);
    let comparison = parseFloat(expression.split(" ")[2].split("").filter(item => Number.isInteger(parseFloat(item))).join(''));
    console.log(comparison)
    return number >= comparison;
  } else if (expression.includes('>=')) {
    let number = expression.split(" ")[0];
    console.log(number);
    let comparison = parseFloat(expression.split(" ")[2].split("").filter(item => Number.isInteger(parseFloat(item))).join(''));
    console.log(comparison)
    return number >= comparison;
  }

}

console.log(rangeComparison("1 in (>=2)"));


module.exports = {
  rangeComparison
}