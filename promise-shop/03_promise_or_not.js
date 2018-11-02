let promise = new Promise(
	(resolve, reject) =>{
		resolve("I FIRED");
		reject(new Error("I DID NOT FIRE"));
	}
); 

onReject = (error) =>{
	console.log(error.message)
}


promise.then(console.log, onReject);



