export default function authorization(callback) {
	const containerBtns = document.querySelector('.js-wrap-btns-auth');
	const btnsOpenAuth = document.querySelectorAll('.js-open-auth');

	btnsOpenAuth.forEach(btn => {
		btn.addEventListener('click', function(e) {
			const keyForm = this.getAttribute('data-key');
			const form = document.querySelector(`#${keyForm}`);
			
			containerBtns.classList.add('is-hide');
			form.classList.add('is-show');
			callback(keyForm)
		})
	})

}