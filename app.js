let btn = document.getElementsByClassName("submitbtn");
let cityName = document.getElementById("countryName");
let confirmCases = document.getElementById("confirmCases");
let deathCases = document.getElementById("deathCases");
let recoveredCases = document.getElementById("recoveredCases");


btn[0].addEventListener("click", () =>{
	
	console.log(cityName.value);
	fetch('https://api.covid19api.com/summary').
	then(data => data.json()).
	then(data => {
		let arr = data.Countries;
		let userCountry;
		for(var i=0; i<arr.length; i++){
			if( arr[i].Country == cityName.value ){
				userCountry = arr[i];
				break;
			}
		}
		if( userCountry === undefined ){
			setCases("0000","0000","0000");
			alert("Please Enter Valid Country Name");
		}
		else{
			console.log(userCountry);
			setCases(userCountry.TotalConfirmed, userCountry.TotalDeaths, userCountry.TotalRecovered);
		}
	}).
	catch((error) => {
		alert("something went wrong");
		console.log(error);
	});
});


function setCases(confirm, death, recover){
	confirmCases.innerText = confirm;
	deathCases.innerText = death;
	recoveredCases.innerText = recover;
}