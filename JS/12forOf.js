const car = {
  Name: " bmw x3 ",
  productYear: 2006,
  color: " blue ",
  isABS: true,
};

/*for (i in car) {
  console.log(i);
  document.write(car[i]);
}*/

for (key of car) {
  console.log(key);
}
