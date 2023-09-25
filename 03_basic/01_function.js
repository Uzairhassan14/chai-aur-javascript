function sayfunction() {
  // console.log("H")
  // console.log("i")
  // console.log("T")
  // console.log("e")
  // console.log("s")
  // console.log("h")
}

sayfunction; /*this is refrences */
sayfunction(); /* Egzicutaion */

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}
// addTwoNumber(3, 7)
// addTwoNumber(3, "7")
// addTwoNumber(3, "a")
// addTwoNumber(3, null)
const result = addTwoNumber(3, null);
// console.log("result : ",result)

function LoginUserMessage(username = "sam") {
  if (!username) {
    // console.log("Please enter a username")
    return;
  }
  return `${username} just Logged In`;
}

// console.log(LoginUserMessage('uzair'))
// console.log(LoginUserMessage(''))
// console.log(LoginUserMessage('Hitesh'))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

calculateCartPrice(2);
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "Hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 409, 500, 600];
function returnSecondvalue(getArray) {
  return getArray[1];
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 409, 500, 600]));
