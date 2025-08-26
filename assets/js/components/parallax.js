const homeContainerDOM = document.querySelector('#home');
const homeIconsDOM = document.querySelectorAll('.home__layer');

function parallax() {
	homeContainerDOM.addEventListener('mousemove', (e) => {
		homeIconsDOM.forEach((icon) => {
			const speed = icon.getAttribute('data-speed');
			const x = (window.innerWidth - e.pageX * speed) / 100;
			const y = (window.innerHeight - e.pageY * speed) / 100;
			icon.style.translate = `${x}px ${y}px`;
		});
	});
}

export default parallax;
