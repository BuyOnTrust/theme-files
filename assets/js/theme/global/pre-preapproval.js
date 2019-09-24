import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
//import utils from '@bigcommerce/stencil-utils';
import { defaultModal } from './modal';

export default function (context) {
    const modal = defaultModal();

    $('body').on('click', '.header-approval-button', event => {
        event.preventDefault();
        event.stopImmediatePropagation;
        modal.open({size: 'large'})        
        const modalContent = document.createElement('div');
        modalContent.setAttribute('id', 'preapproval-form');
        modalContent.setAttribute('allowtransparency', 'true');
        modalContent.style.zIndex = '1000';
        modalContent.style.position = 'relative';
        modalContent.style.top = '0';
        modalContent.style.left = '0';
        modalContent.style.width = '100%';
        modalContent.style.height = '100%';
        modalContent.style.border = 'none';

        const header = document.createElement('div');
        header.style.minHeight = '60px';
        header.style.width = '100%';
        header.style.backgroundColor = 'red';

        const body = document.createElement('div');
        body.style.minHeight = '80vh';
        body.style.width = '100%';
        body.style.backgroundColor = 'green';

        const footer = document.createElement('div');
        footer.style.minHeight = '60px';
        footer.style.width = '100%';
        footer.style.backgroundColor = 'blue';

        modalContent.appendChild(header);
        modalContent.appendChild(body);
        modalContent.appendChild(footer);

        const modalEl = document.querySelector('#modal');
        modalEl.style.maxHeight = '100vh';
        modal.updateContent(modalContent, true);
    });
}