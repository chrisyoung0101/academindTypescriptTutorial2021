//setting this up to work with both numbers and strings

function combine(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combineNames = combine('Max', 'Anna');
