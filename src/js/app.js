import initAuth from './components/auth';
import formAuth from './components/form-auth';
import initTabs from './components/tabs';
import { handlerClickWithoutAccardion, toggleAccardion } from './helpers/form-accardion';


initAuth(formAuth)
initTabs()

const parents = document.querySelectorAll('.have-children');
    
toggleAccardion(parents);

document.addEventListener('click', e => {
    handlerClickWithoutAccardion(e, parents);
})