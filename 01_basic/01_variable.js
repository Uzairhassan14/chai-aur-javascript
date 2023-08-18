const  accountId = 144553
let  accountEmail = "uzair@gmail.com"
var accountPassword ="12345"
accountCity = "jaipur"
let accountSate;

// accountId =2 // not allowed

accountEmail = "@gmail.com"
accountPassword = "32223"
accountCity="benglure"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountCity,accountPassword,accountSate]);
