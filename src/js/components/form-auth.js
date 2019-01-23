import formRoom from './form-room'

export default function formAuth(id) {
    const formAuth = document.querySelector(`#${id}`);
    const cabinetUser = document.querySelector('.js-cabinet-user');

    formAuth.addEventListener('submit', e => {
        e.preventDefault();

        formAuth.classList.remove('is-show');
        cabinetUser.classList.add('is-show');

        formRoom()
    })
}