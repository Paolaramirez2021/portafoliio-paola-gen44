const dateDOM = document.querySelector('.footer__copy span');

function dateUpdater() {
	const currentYear = new Date().getFullYear();
	dateDOM.textContent = `© ${currentYear}`;
}

export default dateUpdater;
