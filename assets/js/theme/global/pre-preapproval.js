import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';

export default function () {
    const applyButtonHeader = document.querySelector('.header-approval-button');

    if(applyButtonHeader) {
        applyButtonHeader.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation;
            showPhoneOptinModal();
        })
    };
   
};

export const showPhoneOptinModal = () => {
    const modalPackage = document.getElementById('preapproval-bg');
    if (!modalPackage) {
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
    } else {
        modalPackage.style.display = 'block';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalPackage) {
            modalPackage.style.display = "none";
        }
    }
};
// div#preapproval-bg
const createModalBackground = () => {
    const background = document.createElement('div');
    background.setAttribute('id', 'preapproval-bg');
    background.setAttribute('allowtransparency', 'true');
    return background;
};
// div.frame
const createModalContainer = () => {
    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class', 'frame');    
    return modalContainer;
};
// div#preapproval-form
const createModalDiv = () => {
    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'preapproval-form');
    // modalContent.setAttribute('allowtransparency', 'true');      
    return modalContent;
};
// Header
const createModalHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('class', 'modal-header-acima');
// Close Button
    const closeButton = createCloseButton();
// Header Wrapper  
    const headerWrap = document.createElement('div');
    headerWrap.setAttribute('class', 'header-wrap-acima')
// Logo
    const logoContainer = document.createElement('div');
    logoContainer.setAttribute('id', 'pre-preapproval-logo-container');
    logoContainer.setAttribute('class', 'header-logo-container');
    const logo = document.createElement('img');
    logo.setAttribute('class', 'header-logo-image');
    logo.setAttribute('src', 'https://cdn11.bigcommerce.com/s-90vdngbq7j/images/stencil/150x60/buy-on-trust-logo_1563418732__08831.original.png');
    logo.setAttribute('title', 'BuyOnTrust');
    logo.setAttribute('alt', 'BuyOnTrust');
    logoContainer.appendChild(logo);
// Tag
    const tag = document.createElement('div');
    tag.setAttribute('class', 'header-tag');    
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
    closeButton.setAttribute('class', 'close-button-modal');
    closeButton.addEventListener('click', (e) => {
        const approvalModal = document.getElementById('preapproval-bg');
        if (approvalModal) { approvalModal.style.display = 'none'; }
    })

    const mark = document.createElement('span');
    const markText = document.createTextNode('x');
    mark.appendChild(markText);
    closeButton.appendChild(mark);
    return closeButton;
};

const createModalBody = () => {
    const body = document.createElement('div');
    body.setAttribute('class', 'pre-preapproval-body');
    
    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('class', 'pre-preapproval-body-container');
    
    const content = document.createElement('div');
    content.setAttribute('class', 'pre-preapproval');
    
    const title = createModalTitle();

    const description = document.createElement('p');
    description.setAttribute('class', 'modal-description-text')
    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = 'After you click \'Submit\', we\'ll text you a verification code'
    description.appendChild(descriptionText);

    const form = createModalForm();

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(form);

    bodyContainer.appendChild(content);
    body.appendChild(bodyContainer);
    return body;
};

const createModalTitle = () => {
    const title = document.createElement('h3');
    title.setAttribute('class', 'modal-title')
    const titleText = document.createTextNode('Enter your information to begin');
    title.appendChild(titleText);
    return title;
};

const createModalForm = () => {
    const form = document.createElement('form');
    form.setAttribute('class', 'capture-info-form');

    const nameInput = createInputEl('fullname', 'Full Name', 'text', 'Full Name');
    const phoneInput = createInputEl('phone', 'Phone Number', 'tel', '801-456-7890');
    const acimaSpan = createAcimaPolicySpan();
    const textOptSpan = document.createElement('span');
    textOptSpan.innerHTML = 'I agree to recieve text messages from BuyOnTrust (standard SMS charges may apply)'
    
    const acimaPolicy = createFormPolicy('acima-policy', false, acimaSpan);
    const botPolicy = createFormPolicy('phone-policy', true, textOptSpan);
    const submitButton = createModalButton();

    form.appendChild(nameInput);
    form.appendChild(phoneInput);
    form.appendChild(acimaPolicy);
    form.appendChild(botPolicy);
    form.appendChild(submitButton);
    return form;
}

const createModalButton = () => {
    const button = document.createElement('button');
    button.setAttribute('class', 'prepre-submit-btn');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Submit';
    return button;
};

const createInputEl = (name, labelText, type, placeholder) => {
    const input = document.createElement('div');
    input.setAttribute('class', 'form-helper-text');

    const label = document.createElement('label');
    label.setAttribute('class', 'form-helper-label');
    label.innerHTML = labelText;

    const inputEl = document.createElement('input');
    inputEl.setAttribute('class', 'form-control-input');
    inputEl.setAttribute('name', name);
    inputEl.setAttribute('placeholder', placeholder);
    inputEl.setAttribute('type', type);

    input.appendChild(label);
    input.appendChild(inputEl);
    return input;
}

const createFormPolicy = (name, checked, span) => {
    const policyForm = document.createElement('div');
    policyForm.setAttribute('class', 'form-check-policy');

    const checkLabel = document.createElement('label');
    checkLabel.setAttribute('class', 'form-check-label');

    const inputEl = document.createElement('input');
    inputEl.setAttribute('id', name);
    inputEl.setAttribute('name', name);
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('class', 'form-check-input');
    if (checked) { inputEl.setAttribute('checked', true);};  

    checkLabel.appendChild(inputEl)
    checkLabel.appendChild(span);
    policyForm.appendChild(checkLabel);
    return policyForm;
};

const createAcimaPolicySpan = () => {
    const span = document.createElement('span');
    const text1 = document.createTextNode('I have read Acima\'s ');
    const link1 = createLinkEl('https://www.acimacredit.com/privacy-policy', 'Privacy Policy');
    const text2 = document.createTextNode(', ');
    const link2 = createLinkEl('https://www.acimacredit.com/e-sign-policy', 'ESIGN Disclosure');
    const text3 = document.createTextNode(', and ');
    const link3 = createLinkEl('https://www.acimacredit.com/terms-of-service', 'Terms of Use');

    span.appendChild(text1);
    span.appendChild(link1);
    span.appendChild(text2);
    span.appendChild(link2);
    span.appendChild(text3);
    span.appendChild(link3);
    return span;
}

const createLinkEl = (linkout, text) => {
    const link = document.createElement('a');
    link.setAttribute('class', 'policy-link');
    link.setAttribute('href', linkout);
    link.setAttribute('target', '_blank');
    link.setAttribute('tabindex', '-1');
    link.innerHTML = text;
    return link;
}

