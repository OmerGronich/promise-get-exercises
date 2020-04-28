const list = document.querySelector('.collection');

async function buildUsersList() {
	let response = await fetch('https://reqres.in/api/users');
	let data = await response.json();

	let users = data.data;
	console.log(users);

	// generate list
	users.forEach(user => {
		list.innerHTML += `
			<li class="collection-item">
				<img class="avatar" src="${user.avatar}">
				<a class="info">More info about me!</a>
			</li>
		`;
	});
}
buildUsersList();
