import Room from './room'

export default function formRoom() {
    const cabinetUser = document.querySelector('.js-cabinet-user');
    const openFormRoom = cabinetUser.querySelector('.js-open-form-room');
    const formRoom = cabinetUser.querySelector('.js-form-room');

    openFormRoom.addEventListener('click', () => {
        formRoom.classList.add('is-show');
    });

    formRoom.addEventListener('submit', e => {
        e.preventDefault()
        const data = {id: `${new Date().getTime()}`};
        const selects = formRoom.querySelectorAll('select');
        const inputs = formRoom.querySelectorAll('input');

        selects.forEach(select => {
            data[select.name] = select.value
        });

        inputs.forEach(input => {
            if ( input.type === 'radio' && input.checked ) {
                data[input.name] = input.value
            } else if ( input.type !== 'radio' ) {
                data[input.name] = input.value
            }
            
        })
        
        const room = new Room(data)

        window.global = []
        window.global.push(room)

        console.log(window.global)
    });

}