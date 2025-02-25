const result = 213; // متغییر ثابت

function log() {
  let localvar = 2;

  if ((localvar = 2)) {
    let localvar = "different variable";

    console.log("nested localvar " + localvar);
  }

  console.log("local variable : " + localvar);
}

// let //برای تاثیر گذاشتن مقدار فقط توی اون کروشه

log();
