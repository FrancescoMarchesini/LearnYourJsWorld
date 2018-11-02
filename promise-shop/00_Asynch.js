//funzione asincrona per stampare "TIMED OUT" dopo 300Ms
//https://javascript.info/settimeout-setinterval

print = (what) =>{
	console.log(what)
}

setTimeout(print, 300, "TIMED OUT!");
