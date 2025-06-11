// https://www.emailjs.com/ RECUERDA QUE PARA LOGRAR ENVIAR EL FORMULARIO DEBES REGISTRARTE AQUÍ
const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const modalCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

function sendEmail() {
	formDOM.addEventListener('submit', (event) => {
		event.preventDefault();

		const templateParams = {
			name: document.querySelector('#name').value,
			email: document.querySelector('#email').value,
			subject: document.querySelector('#subject').value,
			message: document.querySelector('#message').value,
		};

		if (
			templateParams.name &&
			templateParams.email &&
			templateParams.subject &&
			templateParams.message
		) {
			emailjs
				.send(
					'service_b7dd5v8',
					'template_ennmi78',
					templateParams,
				)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						openModal();
					},
					(error) => {
						console.log('FAILED...', error);
					},
				);
		}
	});
}

modalCloseDOM.addEventListener('click', closeModal);

export default sendEmail;
