// FETCH API AND VERIFY FUNCTIONING RESPONSE
fetch('https://reqres.in/api/users')
	// even when there is a 404 response, fetch always succeeds
	// the only time you will get an error is when there is an error with fetch itself, not the API you are calling
	.then((res) => {
		// because of above, checking if the api call worked properly
		if (res.ok) {
			console.log('Success');
		} else {
			console.log('Not successful');
		}
	})
	.then((data) => console.log(data));

// FETCH API AND CREATE A NEW USER
fetch('https://reqres.in/api/users', {
	// creating a new user for this api
	method: 'POST',
	// must tell fetch that we are passing json
	headers: {
		'Content-Type': 'application/json'
	},
	// passing data for the user
	// stringify the json data
	body: JSON.stringify({
		name: 'User 1'
	})
})
	// returning the response
	.then((res) => {
		res.json();
	})
	.then((data) => console.log(data));
