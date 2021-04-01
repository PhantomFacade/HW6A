/*remove cart item buttons*/
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })

}

var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}



function changeSize() {
    console.log("changing size")
    var buttonClicked = event.target
    if (buttonClicked.value == 'size1') {
        document.getElementsByClassName('item-size').innerText = '10’’ x 10’’'
    } else if (buttonClicked.value == 'size2') {
        document.getElementsByClassName('item-size').innerText = '15’’ x 15’’'
    } else if (buttonClicked.value == 'size3') {
        document.getElementsByClassName('item-size').innerText = '20’’ x 22’’'
    }

}


function leaveChange() {
    console.log("leaving change")
    var buttonClicked = event.target
    if (buttonClicked.value == "Couch.png") {
        document.getElementsByClassName('shop-item-image').src = "Couch.png"
        document.getElementsByClassName('item-color').innerText = "Green"
    } else if (buttonClicked.value == "Couch2.png") {
        console.log(document.getElementsByClassName('shop-item-image'))
        document.getElementsByClassName('shop-item-image').src = "Couch2.png"
        document.getElementsByClassName('item-color').innerText = "Grey"
    } else if (buttonClicked.value == "Couch3.png") {
        document.getElementsByClassName('shop-item-image').src = "Couch3.png"
        document.getElementsByClassName('item-color').innerText = "Cyan"
    }
    para = document.querySelector('p');
    window.getComputedStyle(para);
}



/* add to cart*/
var numCartItems = 0

function addToCartClicked(event) {
    numCartItems += 1
    var button = event.target
    button.innerText = 'Add to cart' + ' ' + '(' + numCartItems + ')'
    var title = document.getElementsByClassName('item-size')[0].innerText
    var price = document.getElementsByClassName('price')[0].innerText
    var image = document.getElementsByClassName('shop-item-image')[0].src
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item')
    var cartContents = document.getElementsByClassName('item2')
    var total = 0
    for (var i = 0; i < cartContents.length; i++) {
        var cartContent = cartContents[i]
        var priceElement = cartContent.getElementsByClassName('cart-price')[0]
        var quantityElement = cartContent.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(total)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = total
}