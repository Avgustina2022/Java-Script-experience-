let irina = 2022;
let arrayIrina = [9, 10, 23, false, 2022, "dog"];
console.log(arrayIrina.length);
arrayIrina.push("cat");
console.log(arrayIrina);

arrayIrina.push("cat");
arrayIrina.unshift("mushroom");
console.log(arrayIrina);

var minusItems = [1, 2, 3, 4, 5, 6, 7];
var minusItems = minusItems.splice(3, 2);
console.log(minusItems);

var arr = [0, 1, 2, , 3, 4];
var addItems = arr.splice(2, 0.1, 101);

var newOne = firstArray.concat(secondArray);
console.log(newOne);

var fruits = [apple, pear];
var vegetables = [carrot, onion];
var fruitsVetetables = fruits.concat(vegetables);
console.log(fruitsVetetables);

var one = [1, 2, 3, "a", "b", "c"];
one.reverse();
console.log(one);

var x = [1, 2, 3, 4, 5, 6, "a", "b", "c"];
x.includes("a");
x.includes(j);

arrayIrina.forEach(function(currentValue,index,arr),thisValue);
