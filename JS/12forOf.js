const car = {
  Name: " bmw x3 ",
  productYear: 2006,
  color: " blue ",
  isABS: true,
};

const cars = ["benz", "bmw", "peykan", "pride", "alfa"];

for (i in car) {
  document.write(i); //اسم محتوا رو نشون می ده
  document.write(" : ");
  document.write(car[i]); //محتوا داخلشو نشون می ده
  document.write("<br>");
}

document.write("<br>");

for (i of cars) {
  console.log(i);
}
// فور این خارجشو و فور او داخلشو

