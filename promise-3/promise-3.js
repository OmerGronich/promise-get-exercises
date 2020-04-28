async function buildTodos() {
	let response = await fetch('https://jsonplaceholder.typicode.com/todos');
	let data = await response.json();
	const ul = document.createElement('ul');
	ul.classList.add('card', 'container', 'collection');
	data.forEach(li => {
		if (li.completed) {
			ul.innerHTML += `<li class="collection-item"><del>${li.title}</del></li>`;
		} else {
			ul.innerHTML += `<li class="collection-item">${li.title}</li>`;
		}
	});
	document.body.append(ul);
}
buildTodos();
