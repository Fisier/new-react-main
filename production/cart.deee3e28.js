!function(){let e=document.getElementById("cart-items");e.innerHTML="",JSON.parse(localStorage.getItem("produse")).forEach(t=>{let n=document.createElement("li");n.textContent=`${t.name} - $${t.price}`,e.appendChild(n)}),function(){let e=document.getElementById("cart-total"),t=0;JSON.parse(localStorage.getItem("produse")).forEach(e=>{t+=e.price}),e.textContent=`Total: $${t.toFixed(2)}`}()}();
//# sourceMappingURL=cart.deee3e28.js.map
