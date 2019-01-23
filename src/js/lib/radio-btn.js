const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', './buildings.json');
    request.onload = function (e) {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log('success')
            resolve(response)
        }
        else {
            const error = new Error(this.statusText)
            reject(error);
        }
    }
    request.send()
});

promise.then(
    result => {
        renderForm(result);
        const parents = document.querySelectorAll('.have-children');

        toggleAccardion(parents);
        handlerWithoutParent(parents);
    },
    error => {
        console.log(error);
    }
);

function toggleAccardion(parents) {
    parents.forEach(el => {
        el.addEventListener('click', function (e) {
            e.stopPropagation();
            parents.forEach(el => {
                if (this !== el) {
                    el.classList.remove('is-show')
                }
            })

            if (this.classList.contains('is-show')) {
                el.classList.remove('is-show')
            } else {
                el.classList.add('is-show')
            }
        });
    })
}

function handlerWithoutParent(parents) {
    document.addEventListener('click', e => {
        e.stopPropagation();
        let target = e.target;

        parents.forEach(parent => {
            let children = parent.querySelectorAll('.child');

            children.forEach(child => {
                let itsChild = target === child || child.contains(target);
                let itsParent = target === parent;
                let childIsShow = parent.classList.contains('is-show');

                if (!itsChild && !itsParent && childIsShow) {
                    parent.classList.remove('is-show');
                }
            })
        })
    })
}

function renderForm(arg) {
    const data = arg;
    const form = document.querySelector('.form');
    const templateLabel = document.createElement('label');
    const templateInput = document.createElement('input');
    const templateRadioWrapper = document.createElement('div');

    data.forEach(el => {
        const radioWrapper = templateRadioWrapper.cloneNode(true);
        const input = templateInput.cloneNode(true);
        const label = templateLabel.cloneNode(true);

        radioWrapper.setAttribute('data-id', el.buildingId);
        radioWrapper.classList.add('radio');
        input.type = 'radio';
        input.name = 'building';
        input.value = el.buildingCode;
        input.id = el.buildingId;
        input.classList.add('radio__input')
        label.setAttribute('for', el.buildingId);
        label.innerText = el.buildingName;
        label.classList.add('radio__label', 'radio__title')

        radioWrapper.appendChild(input);
        radioWrapper.appendChild(label);

        if (el.buildingParentId) {
            let parent = document.querySelector(`[data-id="${el.buildingParentId}"]`);
            let parentText = parent.querySelector(`label`).innerText
            let parentTitle = document.createElement('h2');
            parentTitle.classList.add('radio__title')
            radioWrapper.classList.add('child')
            parentTitle.innerText = parentText;

            parent.childNodes.forEach(el => {
                if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'label') {
                    parent.removeChild(el);
                    parent.prepend(parentTitle);
                }

            });

            parent.classList.add('have-children');
            parent.appendChild(radioWrapper);

        } else {
            form.appendChild(radioWrapper);
        }
    });
}