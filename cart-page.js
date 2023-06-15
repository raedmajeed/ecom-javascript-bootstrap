window.onload = function() {
  let obj = JSON.parse(localStorage.getItem('cartItem'))
  let cartNo = document.querySelector('.cart-value-js')
  cartNo.innerText = obj.length
  let popUp = document.querySelector('.pop-up');
  popUp.classList.add('class', 'hide');
  if (obj.length == 0) {
    disableButton();
  }
}

function disableButton() {
  var orderButton = document.getElementById('orderButton');
  orderButton.disabled = true;
}

let cartItems2 = JSON.parse(localStorage.getItem('cartItem'));
let prouctsInCart = '';
let orderCount = 0;
let orderTotalCost = 0;
setCart();

function setCart() {
cartItems2.forEach(element => {

  orderCount += 1;
  orderTotalCost += Number(element.priceCents)

  prouctsInCart = prouctsInCart + `
  <div class="row border m-2">
      <div class="row m-2 delivery-date">
        Delivery Date: ${element.titleName} June
      </div>
      <div class="row mb-3 mx-3 mt-3">
        <div class="col">
          <img class="product-image-size" src=${element.image} alt="">
        </div>
        <div class="col">
          <p class="product-content">${element.titleName}</p>
          <p class="product-content">Rs ${element.priceCents}</p>
        </div>
        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              <p class="product-content-date">Delivery june ${element.titleName} <br>+ 40 Rs</p>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              <p class="product-content-date">Delivery june ${element.titleName} <br>+ 60 Rs</p>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              <p class="product-content-date">Delivery june ${element.titleName} <br>+ 80 Rs</p>
            </label>
          </div>
        </div>
      </div>
    </div>
    </div>
  `
});
}

const tot = orderTotalCost
if (orderTotalCost == 0) {
  tot = 0
}

const cartProducts = document.querySelector('.cart-products')
cartProducts.innerHTML = prouctsInCart

const itemCount = document.querySelector('.item-count')
itemCount.innerText = orderCount

const itemTotal = document.querySelector('.total-cost')
itemTotal.innerText = orderTotalCost

const shipCost = document.querySelector('.ship-cost')
if (orderTotalCost == 0) {
  shipCost.innerText = 0
  var orderButton = document.getElementById('orderButton');
  orderButton.disabled = true;
}
else {
  shipCost.innerText = 70
}

const shippingTotal = document.querySelector('.shipping-total')
shippingTotal.innerText = tot

const tax = document.querySelector('.tax')
tax.innerText = ((tot) * 0.1).toFixed(2)

const total = document.querySelector('.total-cost-2')
total.innerHTML = ((tot) * 0.1) + (tot)

function orderButtonClicked() {
  let obj = []
  localStorage.setItem('cartItem', JSON.stringify(obj))
  let cartNo = document.querySelector('.cart-value-js')
  cartNo.innerText = '0'
  let popUp2 = document.querySelector('.pop-js');
  popUp2.classList.remove('hide');
  disableButton()
}


function popUpClose() {
  let popUp2 = document.querySelector('.pop-js');
  popUp2.classList.add('hide');
}

