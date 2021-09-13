function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //because we are attempting to log a string and a number we need to do the math outside the clg so we get our expected result.
  //Why? because everything in the CLG is converted to a String.
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
