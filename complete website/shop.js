let body = document.querySelector('body');
let listProduct = document.querySelector('.shop-item-list');
let listCart = document.querySelector('.shop-cart-items');

let checkOutList = document.querySelector('.check-out-items');

let totalSpan = document.querySelector('#total-span');
let subTotalSpan = document.querySelector('#sub-total-span');

let checkOutSubtotal = document.querySelector('#check-out-subtotal-val');
let checkOutTotal = document.querySelector('#check-out-total-val');

let form = document.querySelector('#billing-details');

let carts = [];



listProduct.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('add-to-cart')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        addToCart(product_id);
    }
})


const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        if(product_id == 1){
            carts.push({
                product_id: product_id,
                name: "Medical Kit",
                price: 10000,
                image: "public/images/shop/product1.jpg",
                quantity: 1
            });
        }else if(product_id == 2){
            carts.push({
                product_id: product_id,
                name: "Thermometer",
                price: 1500,
                image: "public/images/shop/thermometer.jpg",
                quantity: 1
            });
        }else if(product_id == 3){
            carts.push({
                product_id: product_id,
                name: "BP monitor",
                price: 8000,
                image: "public/images/shop/bloodPressureMonitor.jpeg",
                quantity: 1
            });
        }else{
            carts.push({
                product_id: product_id,
                name: "Face mask",
                price: 1000,
                image: "public/images/shop/masks.jpg",
                quantity: 1
            });
        }
    }else if(positionThisProductInCart < 0){
        if(product_id == 1){
            carts.push({
                product_id: product_id,
                name: "Medical Kit",
                price: 10000,
                image: "public/images/shop/product1.jpg",
                quantity: 1
            });
        }else if(product_id == 2){
            carts.push({
                product_id: product_id,
                name: "Thermometer",
                price: 1500,
                image: "public/images/shop/thermometer.jpg",
                quantity: 1
            });
        }else if(product_id == 3){
            carts.push({
                product_id: product_id,
                name: "BP monitor",
                price: 8000,
                image: "public/images/shop/bloodPressureMonitor.jpeg",
                quantity: 1
            });
        }else{
            carts.push({
                product_id: product_id,
                name: "Face mask",
                price: 1000,
                image: "public/images/shop/masks.jpg",
                quantity: 1
            });
        }
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
}

const addCartToHTML = () => {
    listCart.innerHTML = '';
    checkOutList.innerHTML = '';
    if(carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('shop-cart-item');
            newCart.dataset.id = cart.product_id;
            newCart.innerHTML = `
                <div class="shop-cart-product">
                    <div class="shop-cart-image">
                        <img src="${cart.image}" alt="">
                    </div>
                    <div class="shop-cart-name">
                        ${cart.name}
                    </div>
                </div>
                <div class="shop-cart-price">
                    ${cart.price * cart.quantity} LKR
                </div>
                <div class="shop-cart-quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCart.appendChild(newCart);

            let newCheckOut = document.createElement('div');
            newCheckOut.classList.add('check-out-item');
            newCheckOut.innerHTML = `
            <p class="check-out-item-name">${cart.name} <span class="check-out-item-quantity">x ${cart.quantity}</span></p>
            <p class="check-out-item-price">${cart.price * cart.quantity} LKR</p>
            `
            checkOutList.appendChild(newCheckOut);
        })
    }

    let total = calcTotal()
    totalSpan.innerHTML = total + ".00 LKR";
    subTotalSpan.innerHTML = total + ".00 LKR";

    checkOutSubtotal.innerHTML = total + ".00 LKR";
    checkOutTotal.innerHTML = total + ".00 LKR";

}

listCart.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id === product_id);
    if(positionItemInCart >= 0){
        switch (type) {
            case 'plus':
                total = 0;
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
            
            default:
                total = 0
                let valueChange = carts[positionItemInCart].quantity - 1;
                if(valueChange > 0){
                    carts[positionItemInCart].quantity = valueChange;
                }else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
}

form.addEventListener('submit', function(event) {
    alert('Form submitted successfully!');
});


const calcTotal = () => {
    let t = 0
    for (let i = 0; i < carts.length; i++) {
        if(carts[i].quantity > 0) {
            t = t + carts[i].quantity * carts[i].price;
        }
    }
    return t;
}

function showBillingDetails() {
    if(carts.length > 0) {
        document.querySelector('.shop-checkout-content').style.display = 'block';
        document.querySelector('.shop-feature-tab').scrollIntoView({ behavior: 'smooth'});
    }else{
        document.querySelector('.shop-checkout-content').style.display = 'none';
        alert('Select atleast one item to proceed!');
    }
}

document.querySelector('.check-out').addEventListener('click', showBillingDetails);

