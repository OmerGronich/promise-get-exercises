const dropdown = document.querySelector('.dropdown-select');
const imageList = document.querySelector('.image-list');

async function getBreedNames() {
	const response = await fetch('https://api.thecatapi.com/v1/breeds');
	const breedList = await response.json();
	return breedList;
}

async function initialize() {
	const breedList = await getBreedNames();
	breedList.forEach(breed => {
		dropdown.innerHTML += `
			<option value="${breed.id}">${breed.name}</option>
		`;
	});

	generateImageByBreed(dropdown.value);
}

async function generateImageByBreed(id) {
	const usp = new URLSearchParams({
		breed_ids : id
	});
	const imgRes = await fetch(
		`https://api.thecatapi.com/v1/images/search?${usp.toString()}`
	);
	const data = await imgRes.json();
	const imgUrl = data[0].url;

	imageList.innerHTML = `
		<li class="list-item"><img class="cat" src="${imgUrl}"></li>
	`;
}

document.addEventListener('DOMContentLoaded', initialize);
dropdown.addEventListener('change', e => {
	generateImageByBreed(e.target.value);
});
