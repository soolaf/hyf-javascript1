//1.Hello World.
console.log('hello World! //English');

console.log('Hello, dunia! //Indonesian');

console.log('Hello, mundo! //Spanish');

console.log('Ciao, mondo! //Italian');
console.log('! مرحبا بالعالم //Arabic');

//2.Solve the problem.
console.log("I'm awesome"); //Using double quotes.
console.log('I\'m awesome');//Using escape character
//3.Declare a variable x and initialize it with an integer.
var x;
console.log('I think the value of my variable x will be: undefined');
console.log(x);
x = 12;

console.log('I think the value of my variable x will be: 12');
console.log(x);
//4. Declare a variable y and assign a string to it.
var y = 'keep your smile';
console.log('I think the value of my string variable y will be: keep your smile');
console.log(y);
y = 'be happy';
console.log('I think the value of my string variable y will be: be happy');

console.log(y);
//5.How do you round the number 7.25, to the nearest integer (i.e., whole number).

var z = 7.25;

console.log(z);

var a = Math.round(z);

console.log(a);

var b = Math.max(z, a);

console.log(b);

//6.Arrays.

var myFavoriteAnimals = [];
console.log('array myFavoriteAnimals will be empty');
console.log(myFavoriteAnimals);
 myFavoriteAnimals=['fish','dog','cat'];
console.log('My Favorite Animals is' + ' ' + myFavoriteAnimals);
myFavoriteAnimals.push('baby pig');
console.log('My Favorite Animals is' + ' ' +myFavoriteAnimals);

//7. More strings.

let myString = "this is a test"; 
console.log(myString);
console.log('myString length is'+ ' ' + myString .length);
//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

var myName='Soolaf Alharky' ;

 var myHouesNumber= 32;
 var myFavoriteDishes=['pasta','pizza','hamburgers'];
var myHobbySkiing=false;
console.log('My Name is'+' '+ myName);
console.log(' My Houes Number is'+' '+ myHouesNumber);
console.log(' My Favorite Dishes is'+' '+ myFavoriteDishes);
console.log(' My Hobby Skiing'+' '+ myHobbySkiing);
if(typeof myName!= typeof myHouesNumber){console.log('Not The Same Type');}

else{if(typeof myHouesNumber!= typeof myFavoriteDishes){
console.log('Not The Same Type');
}
else{ if(typeof myFavoriteDishes!= typeof myHobbySkiing)
{console.log('Not The Same Type');
}
else{console.log('The Same Type');
}} }



//9.modulo.
var x = 7 ;
console.log('The value of veriable x is 7');
console.log(x=x%3 );
console.log('The modulus operator(%)computes the remainder after dividing its first operand by its second');

// 10.Write a program.
console.log(' We can store multiple types in an array')

var myList =['cat','fish',5 ];
console.log(myList);
console.log(6/0===10/0);
