const list = document.querySelector('.collection');

async function buildUsersList() {
	let response = await fetch('https://reqres.in/api/users');
	let data = await response.json();

	let users = data.data;

	// generate list
	users.forEach(user => {
		list.innerHTML += `
			<li class="collection-item">
				<img class="avatar" src="${user.avatar}">
				<a id="${user.id}" class="info">More info about me!</a>
			</li>
		`;
	});

	list.addEventListener('click', async function(e) {
		if (e.target.classList.contains('info')) {
			const response = await fetch(
				`https://reqres.in/api/users/${e.target.id}`
			);
			const user = await response.json();
			console.log(user.data.first_name);
			const popup = document.createElement('div');
			popup.classList.add('popup');
			popup.innerHTML = `
				<div class="card">
					<button id="close-popup">X</button>
					<ul class="collection">
						<li class="collection-info"><b>First Name</b>:${user.data.first_name}</li>
						<li class="collection-info"><b>Last Name</b>:${user.data.last_name}</li>
						<li class="collection-info"><b>Email</b>:${user.data.email}</li>
						<li class="collection-info"><b>Company</b>:${user.ad.company}</li>
						<li class="collection-info"><b>Url</b>:${user.ad.url}</li>
						<li class="collection-info"><b>Text</b>:<p>${user.ad.text}</p></li>
					</ul>
				</div>
			`;
			popup
				.querySelector('#close-popup')
				.addEventListener('click', function(e) {
					e.target.parentElement.parentElement.remove();
				});
			document.body.append(popup);
		}
	});
}
buildUsersList();
