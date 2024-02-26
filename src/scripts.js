// const homeButton=document.querySelectorAll('home-btn');
// homeButton.forEach(button => 
//     {
// button.addEventListener('click',function(){
//     window.open("home.html")
// })
//     })
// const productsButton=document.querySelectorAll('products-btn');
// productsButton.forEach(button=>
//     {
//         button.addEventListener('click',function(){
//             window.location.href="/products.html"
//         })
//     })
const products = {
    1: { name: "KingThrone", price: 100000 },
    2: { name: "KingBed", price: 50000 },
    3: { name: "KingSofa", price: 20000 }
  };

  let cartItems = [];
  function addToCart(productId) {
    if (products[productId]) {
      cartItems.push(products[productId]);
      let produseString = JSON.stringify(cartItems);
      localStorage.setItem("produse",produseString);
    } else {
      console.log("Produsul nu exista.");
    }
    console.log(cartItems);
}
  

  
