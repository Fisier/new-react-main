function displayCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    const produse = localStorage.getItem("produse");
    const obiectprd = JSON.parse(produse);

    obiectprd.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
    });

    calculateTotal();
}

function calculateTotal() {
    const totalElement = document.getElementById("cart-total");
    let total = 0;
    const produse = localStorage.getItem("produse");
    const obiectprd = JSON.parse(produse);

    obiectprd.forEach(item => {
        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert(" Order complete");
    localStorage.setItem("produse", "[]"); 
    displayCart();
}

function clearCart() {
    localStorage.removeItem("produse");
    const totalElement = document.getElementById("cart-total");
    totalElement.textContent = `Total: $0.00`;
    displayCart();
}

displayCart();