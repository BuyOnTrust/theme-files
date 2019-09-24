import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
//import utils from '@bigcommerce/stencil-utils';
// import { defaultModal } from './modal';

export default function (context) {
    // const modal = defaultModal();

    $('body').on('click', '.header-approval-button', event => {
        event.preventDefault();
        event.stopImmediatePropagation;
    
        const modalBackground = createModalBackground(); 
        const modalContainer = createModalContainer();     
        const modalContent = createModalDiv();
        const header = createModalHeader();
        const body = createModalBody();
        // Construction
        modalContent.appendChild(header);
        modalContent.appendChild(body);

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
        closeButton.style.fontSize = '1.75rem';
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
        body.style.flex = '1 1 auto';
        body.style.webkitBoxFlex = '1';
        body.style.padding = '1.25rem';
        
        const bodyContainer = document.createElement('div');
        bodyContainer.style.width = '100%';
        bodyContainer.style.paddingLeft = '15px';
        bodyContainer.style.paddingRight = '15px';
        bodyContainer.style.marginLeft = 'auto';
        bodyContainer.style.marginRight = 'auto';
        
        const content = document.createElement('div');
        content.setAttribute('class', 'pre-preapproval');
        
        const title = createModalTitle();

        const description = document.createElement('p');
        description.style.fontSize = '16px';
        description.style.lineHeight = '20px';
        description.style.fontFamily = 'Arial,Helvetica,sans-serif';
        description.style.color = '#6f7b91';
        const descriptionText = document.createElement('p');
        descriptionText.innerHTML = 'Click \'Submit\' and we\'ll text you a verification code'
        description.appendChild(descriptionText);

        content.appendChild(title);
        content.appendChild(description);
        bodyContainer.appendChild(content);
        body.appendChild(bodyContainer);
        return body;
    };

    const createModalTitle = () => {
        const title = document.createElement('h3');
        title.style.fontWeight = '700';
        title.style.fontSize = '20px';
        title.style.lineHeight = '24px';
        title.style.fontFamily = 'Lato,sans-serif';
        title.style.color = '#004987';
        title.style.marginTop = '1rem';
        title.style.paddingBottom = '1rem';
        title.style.marginBottom = '1rem';
        title.style.borderBottom = '1px solid rgba(0,0,0,.1)';
        const titleText = document.createTextNode('Enter your information to begin');
        title.appendChild(titleText);
        return title;
    };
}