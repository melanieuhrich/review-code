let myObj = {
	name: 'Dominic',
	age: 56
};

// data needs to become a string
let myObj_serialized = JSON.stringify(myObj);

// set item with a key and a value
localStorage.setItem('myObj', myObj_serialized);

console.log(localStorage);

// data needs to return to an object, access it with the key
let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));

console.log(myObj_deserialized);
