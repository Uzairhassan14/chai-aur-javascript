const name = "uzair";
const repoCount = 50;

console.log(name + repoCount + " Vlaue");

console.log(`hello my name is  ${name} and my repo account is ${repoCount}`);

const gameName = new String("uza-ir-hanns");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherstring = gameName.slice(-5, 4);
console.log(anotherstring);


const  newStringOne = " uzair ";
console.log(newStringOne);
console.log(newStringOne.trim());


const  url ="https://uzair.com/uzair%20chaoudry"

console.log(url.replace("%20", '-'))

console.log(url.includes("uzair"))


console.log(gameName.split('-'))