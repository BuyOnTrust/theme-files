import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
//import utils from '@bigcommerce/stencil-utils';
// import { defaultModal } from './modal';

export default function (context) {
    // const modal = defaultModal();

    $('body').on('click', '.header-approval-button', event => {
        event.preventDefault();
        event.stopImmediatePropagation;
        // modal.open({size: 'large'})  
        const modalBackground = createModalBackground(); 
        const modalContainer = createModalContainer();     
        const modalContent = createModalDiv();
        const header = createModalHeader();
        const body = createModalBody();
        const footer = createModalFooter();
        // Construction
        modalContent.appendChild(header);
        modalContent.appendChild(body);
        modalContent.appendChild(footer);

        // const modalEl = document.querySelector('#modal');
        // modalEl.style.maxHeight = '100vh';
        // modal.updateContent(modalContent, true);
        modalContainer.appendChild(modalContent);
        modalBackground.appendChild(modalContainer);
        document.body.appendChild(modalBackground);
    });

    const createModalBackground = () => {
        const background = document.createElement('div');
        background.setAttribute('id', 'preapproval-bg');
        background.setAttribute('allowtransparency', 'true');
        background.style.zIndex = '1000';
        background.style.position = 'fixed';
        background.style.top = '0px';
        background.style.left = '0px';
        background.style.width = '100%';
        background.style.height = '100%';
        background.style.border = 'none';
        background.style.backgroundColor = 'rgba(70, 68, 68, 0.5)';
        background.addEventListener('click', (e) => {
            e.preventDefault();
            const approvalModal = document.getElementById('preapproval-bg');
            if(approvalModal) {approvalModal.remove();}
        })
        return background;
    };

    const createModalContainer = () => {
        const modalContainer = document.createElement('div');
        modalContainer.setAttribute('class', 'frame');
        modalContainer.style.maxWidth = '600px';
        modalContainer.style.width = '100%';
        modalContainer.style.minHeight = '850px';
        modalContainer.style.padding = '80px 0';
        modalContainer.style.overflow = 'hidden';
        modalContainer.style.margin = 'auto';        
        return modalContainer;
    };

    const createModalDiv = () => {
        const modalContent = document.createElement('div');
        modalContent.setAttribute('id', 'preapproval-form');
        modalContent.setAttribute('allowtransparency', 'true');
        modalContent.style.position = 'relative';
        modalContent.style.top = '0';
        modalContent.style.left = '0';
        modalContent.style.width = '100%';
        modalContent.style.height = '100%';
        modalContent.style.border = 'none';
        modalContent.style.zIndex = '1001';
        modalContent.addEventListener('click', (e) => {
            console.log('clicked modal')
            e.preventDefault();
            e.stopImmediatePropagation();
        })
        return modalContent;
    };

    const createModalHeader = () => {
        const header = document.createElement('div');
        header.style.minHeight = '60px';
        header.style.width = '100%';
        header.style.backgroundColor = 'red';
        return header;
    };

    const createModalBody = () => {
        const body = document.createElement('div');
        body.style.minHeight = '400px';
        body.style.width = '100%';
        body.style.backgroundColor = 'green';
        return body;
    };

    const createModalFooter = () => {
        const footer = document.createElement('div');
        footer.style.minHeight = '60px';
        footer.style.width = '100%';
        footer.style.backgroundColor = 'blue';
        return footer;
    };
}