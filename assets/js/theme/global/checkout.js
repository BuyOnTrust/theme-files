
export default function (context) {
        if(context.template === 'pages/checkout') {
                logCheckout();
        }
};

//Log Checkout Details to the Console
const logCheckout = () => {
        fetch('/api/storefront/cart?include=lineItems.digitalItems.options,lineItems.physicalItems.options', {
                credentials: 'include'
        })
                .then(function (response) {
                        return response.json();
                })
                .then(function (cartJson) {
                        if (cartJson) {
                                localStorage.setItem('cartId', cartJson[0].id);
                                console.log('Cart Object Instantiated.');
                                return cartJson[0].id;
                        } else {
                                console.log('No Cart Object available yet.');
                                return
                        };
                })
                .catch(function (error) {
                        console.log(error);
                })
                .then(function (cartId) {
                        fetch('/api/storefront/checkouts/' + cartId, {
                                credentials: 'include'
                        })
                                .then(function (response) {
                                        return response.json();
                                })
                                .then(function (checkoutJson) {
                                        // localStorage.setItem('checkout', checkoutJson);
                                        console.log('Checkout Object Created', checkoutJson);
                                })
                                .catch(function (error) {
                                        console.log(error);
                                });
                });
};