import * as app from "./all-functions.js";

test("capitalize", () => {
  expect(app.capitalize("yehor")).toEqual("Yehor");
  expect(app.capitalize("hello world")).toEqual("Hello world");
});

test("reverse", () => {
  expect(app.reverse("Yehor")).toEqual("roheY");
});

test("calculator", () => {
  expect(app.calculator.add(1, 2)).toEqual(3);
  expect(app.calculator.subtract(1, 2)).toEqual(-1);
  expect(app.calculator.divide(1, 2)).toEqual(0.5);
  expect(app.calculator.multiply(1, 2)).toEqual(2);
});

test("caesar cipher", () => {
  expect(app.caesarCipher("xyz", 3)).toEqual("abc");
  expect(app.caesarCipher("HeLLo", 3)).toEqual("KhOOr");
  expect(app.caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

test("analize array", () => {
  expect(app.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    avg: 4,
    min: 1,
    max: 8,
    arrLength: 6,
  });
});
