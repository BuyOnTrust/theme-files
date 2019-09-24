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
        // modalContent.appendChild(footer);

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
        modalContent.style.backgroundColor = '#fff';  
        modalContent.style.borderRadius = '.5rem';  
        modalContent.addEventListener('click', (e) => {
            console.log('clicked modal')
            e.preventDefault();
            e.stopImmediatePropagation();
        })
        return modalContent;
    };

    const createModalHeader = () => {
        const header = document.createElement('div');
        header.style.marginBottom = '0';
        header.style.padding = '1rem 1.25rem';
        header.style.borderBottom = '1px solid rgba(0,0,0,.125)';
        header.style.width = '100%';
        header.style.backgroundColor = 'rgba(0,0,0,.03)';
// Close Button
        const closeButton = createCloseButton();
        
        const headerWrap = document.createElement('div');
        headerWrap.style.display = 'flex';
        headerWrap.style.justifyContent = 'space-between';
        headerWrap.style.alignItems = 'flex-end';
        headerWrap.style.webkitBoxPack = 'justify';
        headerWrap.style.webkitBoxAlign = 'end';
// Logo
        const logoContainer = document.createElement('div');
        logoContainer.style.width = '170px';
        logoContainer.style.height = '70px';
        logoContainer.style.display = 'flex';
        logoContainer.style.alignItems = 'center';
        logoContainer.style.justifyContent = 'flex-end';
        const logo = document.createElement('img');
        logo.setAttribute('class', 'header-logo-image');
        logo.setAttribute('src', 'https://cdn11.bigcommerce.com/s-90vdngbq7j/images/stencil/150x60/buy-on-trust-logo_1563418732__08831.original.png');
        logo.setAttribute('title', 'BuyOnTrust');
        logo.setAttribute('alt', 'BuyOnTrust');
        logoContainer.appendChild(logo);
// Tag
        const tag = document.createElement('div');
        tag.style.color = '#004987';
        tag.style.fontWeight = '700';
        tag.style.fontFamily = 'Lato,sans-serif';
        tag.style.fontSize = '15px';
        const tagText = document.createTextNode('Buy On Trust');
        tag.appendChild(tagText);

// Construction
        headerWrap.appendChild(logoContainer);
        headerWrap.appendChild(tag);

        header.appendChild(closeButton);
        header.appendChild(headerWrap);
        return header;
    };

    const createCloseButton = () => {
        const closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'close');
        closeButton.style.padding = '0';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.border = '0';
        closeButton.style.float = 'right';
        closeButton.style.fontSize = '1.5rem';
        closeButton.style.fontWeight = '700';
        closeButton.style.lineHeight = '1';
        closeButton.style.color = '#000';
        closeButton.style.textShadow = '0 1px 0 #fff';
        closeButton.style.opacity = '.5';
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            const approvalModal = document.getElementById('preapproval-bg');
            if (approvalModal) { approvalModal.remove(); }
        })

        const mark = document.createElement('span');
        const markText = document.createTextNode('x');
        mark.appendChild(markText);
        closeButton.appendChild(mark);
        return closeButton;
    };

    const createModalBody = () => {
        const body = document.createElement('div');
        body.style.minHeight = '400px';
        body.style.width = '100%';
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