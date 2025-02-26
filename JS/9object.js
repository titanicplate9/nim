var person = {
  firstname: "nima",
  lastname: "gholami",
};

console.log(person);

var person2 = new Object();

person2.phonenumber = 9190944366;
person2.age = 28;

console.log(person2);

var course = {
  title: "javascript",
  teacher: "mohammad hashemi",
  level: 1,
  isactive: true,
  views: 0,
  updateviews: function () {
    return ++course.views;
  },
};
console.log(course.views);

course.updateviews();

console.log(course.views);
