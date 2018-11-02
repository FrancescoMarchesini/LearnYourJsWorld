# Promise

La **promise** è un'oggetto che definisce un metodo chiamato **then**. L'oggetto **promise** rappresenta un valore che può essere disponibile in un possibile tempo futuro.

## 01_Then 

Il valore della **promise** è ottenuta chimando il metodo **then**, che può essere chiamato più volte, oppure come è piu comunemente usanto un unica vola nella funzione di callBack **onFulFilled**

```js
let promise = new Promise(
	(resolve, reject) => {
		setTimeout(function(){
			resolve("FULFILLED!");
		}, 300)
	};
);

promise.then(console.log) 
```

## 02_Reject

Il secondo metodo della **promise** e **reject** che viene utilizzato per leggere il valore della **promise** quando non è andata a buon fine, ad esempio 

```js
let promise = new Promise(
	(resolve, reject) =>{
		setTimeout(function(){
			reject(new Error('REJECTED!'));
		}, 300);
	}
);

onRejected = (error) =>{
	console.log(error.message)
};

promise.then(null, onRejected)
```

## 03_promiseOnPromise

Una **promise** che come risposta ha un valore vero, non può non essere che vera :) anche se viene subito **reject** ... Una promessa è sempre una promessa

```js
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
```


