export const toggleAccardion = function(parents) {
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

export const handlerClickWithoutAccardion = function(e, parents) {
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
    
}