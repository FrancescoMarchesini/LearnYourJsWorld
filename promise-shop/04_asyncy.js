let promise = new Promise(
	(resolve, reject) =>{
		resolve("CHE UNA PROMISE E' SEMPRE ASINCRONA");
	}
); 

promise.then(console.log);

console.log("QUESTO DIMOSTRA");



