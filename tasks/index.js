let a1 = { one: 15, two: 16, five: 20 };
document.getElementById("but").onclick = () => {
  document.querySelector(".container").innerHTML = a1.two;
};

let a2 = { one: "hello", two: "mahai", five: "hi" };
document.getElementById("but1").onclick = () => {
  document.querySelector(".container2").innerHTML = a2.five;
  let fiveImean = "five";
  console.log(a2[fiveImean]);
};
let a3 = { one: "hello", two: "mahai", five: "hi" };

document.getElementById("but2").onclick = () => {
  document.querySelector(".container3").innerHTML = a3.five;
  console.log(a3);
};

let a4 = { cat: "murka", dog: "zulka", tree: ["birch", "oak", "pine", "fir"] };
function f4() {
  let = "";
  for (a4.tree) {
    out += `${cat},${dog}, <br> ${a4[tree]}`;
  }

}

let a5 = { cat: "murka", dog: "zulka", tree: "oak"};


document.querySelector('.i_51').onclick = f1;
document.querySelector('.i_52').onclick = f2;
function f1()
function f2()
console.log(obj.cat)
console.log(obj.dog)


var arr = {};
function toArray() {
  arr[document.querySelector('.i_51').value] = document.querySelector('.i_52').value;
  console.log(arr);
}


