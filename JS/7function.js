var result;

function findbiggest(a, b) {
  if (a > b) {
    result = ["firstFraction", a];
  } else {
    result = ["secondFraction", b];
  }
  return result;
}

// var newResult = findbiggest(13 / 25, 7 / 16)
// console.log(newResult);

// console.log(findbiggest(13 / 25, 7 / 16));

var FractionResult = findbiggest(13 / 25, 7 / 16);
console.log(
  "fraction " +
    FractionResult[0] +
    " with a value " +
    FractionResult[1] +
    " is the biggest"
);

//<!------------------------------------------------------------------------------------------------------------------------------------------------>

// anonymous function

var theBiggest = function (a, b) {
  a > b ? (result = ["a", a]) : (result = ["b", b]);
  return result;
};
// این همون ایف و الس کوتاهه

console.log(theBiggest(7 / 9, 13 / 25));

// این نوع تابع ها رو باید داخل یک متغیر قرار بدیم تا بتونیم ازشون استفاده کنیم

//<!------------------------------------------------------------------------------------------------------------------------------------------------>

// immediately invoked function
// این تابع ها بلافاصله اجرا میشن
// این تابع ها رو باید داخل پرانتز قرار بدیم

var theBiggest = (function (a, b) {
  a > b ? (result = ["a", a]) : (result = ["b", b]);
  return result;
})(7 / 9, 13 / 25);

console.log(theBiggest);
