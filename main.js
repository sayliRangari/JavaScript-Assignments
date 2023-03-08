var a = 10;
var b = 20;
var sum = a+b;
console.log(sum, typeof sum);

var value = "Learning Javascript";
console.log(value, typeof value);

var bool = true;
console.log(bool, typeof bool);

var nullvalue =null;
console.log(nullvalue, typeof nullvalue);

var undefinedValue = undefined;
console.log(undefinedValue, typeof undefinedValue);
 
var sym = Symbol("id");
console.log(sym, typeof sym);


//To check the user is eligible to vote or not- START
var age = 20;
    if (age >= 18) {
    console.log("User is eligible to vote");
    } else {
    console.log("User is not eligible to vote");
    }
//To check the user is eligible to vote or not- END

//Function to add one number in existing number-START
function addOne(number)
{
    var result = number + 1;
    console.log(result);
    return result;
}

addOne(13);
//Function to add one number in existing number-END

//Array of 20 elements-START
var stringArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "imbe", "jackfruit", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine"];

for (var i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);
}
//Array of 20 elements-END

var animalsArray =["Lion","Tiger","Goat","Horse","Dog"];

animalsArray.push("Cat");
animalsArray.unshift("pig");
animalsArray.pop();
animalsArray.shift();
console.log(animalsArray);