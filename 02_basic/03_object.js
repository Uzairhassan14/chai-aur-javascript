//  sigletone =>like this method //Object.create

//Object litrels

const  sym =Symbol('key1')

const JsUser = {
  name: "Uzair",
  age: 18,
  "full name": 'zuair hassan',
  sym :"key2",
  location: "Islamabad",
  email: "uzair@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "wednesday"],
};


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[sym])

JsUser.age = 20
Object.freeze(JsUser)
JsUser.age = 22
console.log(JsUser)

JsUser.greeting = function () {
    console.log("hello Js user")
}

console.log(JsUser.greeting)