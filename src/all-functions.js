export function capitalize(str) {
  const chars = str.split("");
  chars[0] = chars[0].toUpperCase();
  return chars.join("");
}

export function reverse(str) {
  const chars = str.split("");
  const reversed = chars.reverse();
  return reversed.join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export function caesarCipher(str, shift) {
  const lowerCaseRange = {
    min: 96,
    max: 123,
  };
  const upperCaseRange = {
    min: 64,
    max: 91,
  };

  const chars = str.split("");
  chars.forEach((char, index) => {
    const charCode = char.charCodeAt(0);
    const shiftedCharCode = charCode + shift;
    if (isInRange(charCode, lowerCaseRange)) {
      chars[index] = doShifting(shiftedCharCode, lowerCaseRange);
    }
    if (isInRange(charCode, upperCaseRange)) {
      chars[index] = doShifting(shiftedCharCode, upperCaseRange);
    }
  });

  return chars.join("");
}

export function analyzeArray(arr) {
  arr.sort((a, b) => a - b);
  const arrLength = arr.length;
  const min = arr[0];
  const max = arr[arrLength - 1];
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arrLength;

  return {
    min,
    max,
    avg,
    arrLength,
  };
}

function isInRange(num, range) {
  return num > range.min && num < range.max;
}

function doShifting(shiftedCharCode, range) {
  if (isInRange(shiftedCharCode, range)) {
    return String.fromCharCode(shiftedCharCode);
  } else {
    const diff = shiftedCharCode - (range.max - 1);
    return String.fromCharCode(range.min + diff);
  }
}
