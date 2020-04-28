const list = document.querySelector('#list');
const container = document.querySelector('.container');
const paginationEl = document.querySelector('#pagination');

async function displayCats() {
	const currentPaginationEl = [
		...paginationEl.children
	].find(button => button.classList.contains('active'));

	const params = new URLSearchParams({
		query : currentPaginationEl.innerText
	});

	const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=?${params.toString()}`;

	const response = await fetch(url);
	const catList = await response.json();

	list.innerHTML = '';

	catList.forEach(cat => {
		list.innerHTML += `<li class="list-item"><img class="cat" src="${cat.url}"></li>`;
	});
}
displayCats();

// Change pages
paginationEl.addEventListener('click', function(e) {
	if (!e.target.classList.contains('active')) {
		// remove previous styling
		const prevPaginationEl = [
			...paginationEl.children
		].find(button => button.classList.contains('active'));

		prevPaginationEl.classList.remove('active');
		e.target.classList.add('active');

		displayCats();
	}
});
