
let cart = [];
function addToCart(product, price){
    cart.push({product, price, qty:1});
    updateCart();
}
function updateCart(){
    let cartDiv = document.getElementById('cartItems');
    if(!cartDiv) return;
    cartDiv.innerHTML = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        cartDiv.innerHTML += `<div>${item.product} - Qty: <input type='number' value='${item.qty}' min='1' onchange='changeQty(${index}, this.value)'></div>`;
    });
    document.getElementById('subtotal').innerText = 'Subtotal: $'+subtotal;
}
function changeQty(index, value){
    cart[index].qty = parseInt(value);
    updateCart();
}
function searchProduct(){
    let search = document.getElementById('searchBar').value.toLowerCase();
    let productResult = document.getElementById('productResult');
    let emptyMessage = document.getElementById('emptyMessage');
    if(search.includes('f1') || search === ''){
        productResult.style.display = 'block';
        emptyMessage.style.display = 'none';
    } else {
        productResult.style.display = 'none';
        emptyMessage.style.display = 'block';
    }
}
