1//strings
let myString = "hello this is a difficult to read sentence";

console.log(myString.length);
console.log(myString);
2//Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals.push("turtle"));
console.log( favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(`I think the new value of the array is:["blowfish", "meerkat", "capricorn", "turtle"]`)
console.log( favoriteAnimals);

console.log(`The array has a length of:${favoriteAnimals.length}`);

favoriteAnimals.splice(3,1);

console.log(favoriteAnimals);

console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`);
//javaScript
1//
let m=5;
let n=9;
let l=7;
function myBar(m,n,l){
   return m+n+l;
}
console.log(m+n+l);
2//
function colorCar( color ) {
	return "a " + color + " car";
    
}
console.log(colorCar("red"));

colorCar ("red"); 


4// 
function vehicleType( color, type ) {
	let stringType;
	if (type == 1)
		stringType = "car";

	if (type == 2)
		stringType = "motorbike";

	return "a " + color + " " + stringType;
}
console.log(vehicleType("blue", 2));
vehicleType(" blue " , 2);
5//
if(3===3){ console.log("true") } else { console.log("false")};
6//
function vehicle(color, age, type) {
	const carAges = {
			"1": "new","2": "used"
		};

        transportTypes = {
            "1": "car","2": "motorbike"
		};
  
	return "a " + color  + " " + carAges[age]  + " " + transportTypes[type];
    }
console.log(vehicle( " blue ", 2, 1));


	
    7//
    let vehicles = ["motorbike" , "caravan" , "bike" ];
console.log(vehicles);
8//
console.log(vehicles[2]);
 9//
function vehicle(color, age, type) {
	const carAges = {
			"1": "old","2": "used","3": "new"
		};

        transportTypes = {
	      	"1": "bike","2": "caravan","3": "motorbike"
		};
  
	return "a " + color  + " " + carAges[age]  + " " +   transportTypes[type];
}
console.log(vehicle(" green ", 3, 1));
10//
let News = "Amazing Joe's Garage, we service, ";
let Transport = [" cars " ,  " motorbikes " , " caravans " , " bikes "];



console.log(News + " " + Transport.join());

11//
let News= "Amazing Joe's Garage, we service, ";
let Transport = [" cars " , " motorbikes " , " caravans " , " bikes "];
Transport.push(" tractor ");
console.log(News + " " + Transport.join());
12//
var object = {};


15//
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log (x == y);//false 
console.log (x === y);//false 
console.log (z == y); //true
console.log (z == x);//false
16//
let o1 = { foo: "bar" };
let o2 = { foo: "that"+"bar" };
let o3 = o2;
console.log(o1,o2,o3)
17//
let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar);
"string"
//because the computer taking that from right to left
