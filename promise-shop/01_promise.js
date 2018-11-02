let promise = new Promise((resolve, reject) => {
	//esegui qualcosa di asincrono
	
	setTimeout(function(){
	//risoluzione della promise
		resolve("FULFILLED!");
	}, 300)
});

//promise.then((successMessage)=>{
	//il successMessage viene passato alla funzione resolve
//	console.log(successMessage)
//})

promise.then(console.log) 
