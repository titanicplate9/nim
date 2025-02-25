function findBiggestFraction(a, b) {
  document.write("the function is running!" + "<br>");

  if (a > b) {
    document.write("a :" + a);
  } else {
    document.write("b :" + b);
  }
}

var first = 3 / 4;
var second = 5 / 7;

findBiggestFraction(second, first);
document.write("<br>");
findBiggestFraction(7 / 16, 13 / 25);
// نیم فانکشن ها رو باید فراخوانی کنیم تا اجرا بشن
