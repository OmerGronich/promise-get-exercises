function delay(ms) {
	let promise = new Promise(resolve => {
		setTimeout(resolve, ms);
	});

	promise.then(() => {
		const img = document.createElement('img');
		img.style.width = '700px';
		img.style.height = '500px';
		img.src =
			'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260>';
		document.body.appendChild(img);
	});
}

delay(2000);
