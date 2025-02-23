document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product .add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart (Placeholder)');
        });
    });
});