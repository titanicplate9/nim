const cars = ["benz", "bmw", "pride", "peykan", "ford"];
var i = 0;

/*while (cars[i]) {
  console.log(cars[i]);
  i++;
}*/

// تا وقتی که مقادیر داشته باشه شرط برقراره و چاپ می شه
do {
  document.write(i);
  i++;
} while (i > 10);
// اول عملیاتو انجام میده بعد شرطو چک می کنه

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  } //  پنج چاپ نمی شه
  console.log(i);
}
