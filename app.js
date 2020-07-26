let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

async function newQuote() {
	let data = await (await fetch(url)).json();
	//console.log(data);
	document.querySelector('#quote').textContent = `" ${data[0]} "`;
}

function axiosQuote() {
	axios
		.get(url)
		.then((response) => {
			document.querySelector('#quote').textContent = `" ${response.data[0]} "`;
		})
		.catch((err) => {
			console.log(err);
		});
}

document.querySelector('#btn1').addEventListener('click', newQuote);
document.querySelector('#btn2').addEventListener('click', axiosQuote);
