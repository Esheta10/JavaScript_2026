const firstName = "Esheta"
const lastName = "Jaiswal"

let fullName = firstName + " " + lastName
// console.log(fullName)


console.log(fullName.toUpperCase());

console.log(fullName.toLowerCase());

let a = 10, b = 20, c = 30;
console.log(`a=${a} b=${b} c=${c}`)

let str = new String("Lamine Yamal")
console.log(str);


// Properties
let name = "Esheta Jaiswal"
console.log(name.length)

// trim method
let game = " FIFA World Cup 2026       ";
console.log(game.trim());


let name1 = "Marc"
let name2 = "Cucurella"

console.log(name1.concat(name2));

let sentence = " Spain won the 2026 FIFA World Cup against Argentina"
console.log(sentence.includes("FIFA"));

let weather = "It's a rainy day"
console.log(weather.indexOf('a')); // returns the first occuring index of character
console.log(weather.charAt(7)); // returns the character at the given index

let sentence2 = "Alex is a girl's name";
console.log(sentence2.replace("girl", "boy"));

let sentence3 = "Girls should be encouraged to study. An educated girl educates an entire family. Girls should be bold, fearless and unstoppable."
console.log(sentence3.replaceAll("Girl", "Boy"));

let sentence4 = "apple banana orange mango"
console.log(sentence4.split(" "));
console.log(sentence4.split("a"));


let sentence5 = "Ferran Torres scored the winning goal against Argentina in the World Cup finals";
console.log(sentence5.slice(10, 30));


// question-1 
const personName= "Esheta Jaiswal"
console.log(`@${personName.trim().replace(" ", "")}_${personName.length}`)


// question-2.3
let username = "Pau Cubarasi A"
let search = 'a';

let count = 0;
for(let index in  username){
    if(username[index].toLowerCase() === search.toLowerCase()){
        console.log("Occurence position is: ", index);
        count++;
    }
}
console.log("Count = ",count);

let sentence6 = "It's raining quite heavily today"
console.log(sentence6.split(" ").length);

