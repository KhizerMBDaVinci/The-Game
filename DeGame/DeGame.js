// NAAM: Khizer Butt
// KLAS: 18A1
// OPLEIDING: Applicatie en mediaontwikkelaar

var puntenteller = 0;

function start() {
	console.log('spel begonnen')
	alert("Het spel is begonnen!")



	var vraag1=prompt("Hoeveel graden is de aarde gekantelt?");
		if (vraag1>22&&vraag1<25){
			puntenteller++;
			console.log(puntenteller);
		}
	var vraag2=prompt("Is JavaScript een hoofdletter gevoelig programeertaal?")
		if (vraag2=='ja') {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag3=prompt("Wanneer was Apple opgericht?")
		if (vraag3==1976) {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag4=prompt("Uit welke molecuulformule bestaat water? CO2 of H2O. ")
		if (vraag4=="h2o") {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag5=prompt("Wanneer was de eerste officiële versie van minecraft uitgekomen?")
		if (vraag5==2009) {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag6=prompt("Wat is het meest belangrijkste levensbron van een mens?")
		if (vraag6=='water') {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag7=prompt("Hoeveel meter lang is de Burj Khalifa?")
		if (vraag7==828) {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag8=prompt("In welke jaar ging hitler dood?")
		if (vraag8==1945) {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag9=prompt("Groeien schimmels in het licht?")
		if (vraag9=="nee") {
			puntenteller++
			console.log(puntenteller)
		}
	var vraag10=prompt("Heeft Aziz een coole baard?")
		if (vraag10=="nee") {
			puntenteller-=999
		}

if (puntenteller<5) {
	alert("Je hebt "+puntenteller+"/10 punten behaalt, helaas je hebt verloren.")
}
else if (puntenteller>=5) {
	alert("Je hebt "+puntenteller+"/10 punten behaalt dus je hebt gewonnen!")
}


}