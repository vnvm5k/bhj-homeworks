let check = []; 


document.addEventListener('click', function(event) {
	let e = event.target; 
	if(!e.classList.contains('product__quantity-control')) return;
	let parsed = parseInt(e.closest('.product__quantity-controls').children[1].innerHTML);
    if (e.classList.contains('product__quantity-control_inc')) { 
    	e.closest('.product__quantity-controls').children[1].innerHTML = parsed + 1; 
    } else if (parsed > 1) {
    	e.closest('.product__quantity-controls').children[1].innerHTML = parsed - 1; 
    }

});



document.addEventListener('click', function(event) {
	let e = event.target;
	
	if(!e.classList.contains('product__add')) return;
	let cart = document.querySelector('.cart__products');
	let checkClone = check.findIndex(element => element.dataset.id == e.closest('.product').dataset.id)
	
	if(checkClone == -1) {
		cart.innerHTML += 
		`<div class="cart__product" data-id="${e.closest('.product').dataset.id}">
	               <img class="cart__product-image" src="${e.closest('.product').children[1].src}">
	               <div class="cart__product-count">${e.closest('.product__quantity').children[1].children[1].innerHTML}</div>
	    </div>`
	}else {
		
		check[checkClone].children[1].innerHTML = parseInt(check[checkClone].children[1].innerHTML) + parseInt(e.closest('.product__quantity').children[1].children[1].innerHTML); 
	}

	check = Array.from(document.querySelectorAll('.cart__products > .cart__product'));
		
});