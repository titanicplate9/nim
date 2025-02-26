function course(title, teacher, level, isactive, views, updateviews) {
  this.title = title;
  this.teacher = teacher;
  this.level = level;
  this.isactive = isactive;
  this.views = views;
  this.updateviews = function () {
    return ++this.views;
  };
}
var course1 = new course("javascript", "mohammad hashemi", 1, true, 0);
var course2 = new course("python", "nima", 2, true, 110);
var course3 = new course("css", "milad", 3, false, 200);

console.log(course1);
console.log(course2);
console.log(course3);
