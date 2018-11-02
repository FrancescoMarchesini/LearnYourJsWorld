let promise = new Promise(
	(resolve, reject) =>{
		resolve("UNA PROMOSESSA E' UNA PROMESSA");
		reject(new Error("UNA NON PROMESSA NON E' UNA PROMESSA"));
	}
); 

onReject = (error) =>{
	console.log(error.message)
}


promise.then(console.log, onReject);



