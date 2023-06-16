window.onload = function() {
  let obj = JSON.parse(localStorage.getItem('cartItem'))
  let cartNo = document.querySelector('.cart-value-js')
  cartNo.innerText = obj.length

  const navButton = document.querySelector('.nav-pop-up')
  navButton.classList.add('hide')
}

// FUNCTION TO ACTIVATE NAV BUTTON FOR SMALLER SCREEN SIZE

function navButtonClicked() {
  const navButton = document.querySelector('.nav-pop-up')
  navButton.classList.toggle('hide')
}