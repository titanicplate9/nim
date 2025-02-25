// var MyArray=["ali",23,true,"hossein",24.234423];

// console.log(MyArray);
// روش اول تعریف ارایه
//<!--------------------------------------------------------------------------------------------->
// var Names = new Array("mohammad", "nima", "ali", "milad", "hossein");

// console.log(Names[2]);
// روش دوم تعریف ارایه

var colors = ["red", "black", "yellow", "blue", "orange"];

colors.reverse(); // معکوس

colors.shift(); // اولی حذف کرد

colors.unshift("white"); // برعکس شیفت اضافه می کنه

// colors.pop(); // از اخر شیفت کرد

// colors.push("white"); // از اخر آن شیفت کرد

var newcolors = colors.slice(); // copy

console.log(newcolors);

var result = colors.indexOf("blue", 2);
// ابی رو جستجو می کنه و از خونه دوم این کارو شروع می کنه

console.log(result);

var arrayeString = colors.join(" / ");

console.log(arrayeString);
