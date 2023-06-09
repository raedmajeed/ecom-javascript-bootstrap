// FUNCTION TO WORK WHEN THE WEBPAGE LOADS

window.onload = function() {
  let obj = JSON.parse(localStorage.getItem('cartItem'))

  // --- UNCOMMENT AND SAVE TO EMPTY THE CART ---
  // obj = []
  // localStorage.setItem('cartItem', JSON.stringify(obj))

  let cartNo = document.querySelector('.cart-value-js')
  cartNo.innerText = obj.length

  const navButton = document.querySelector('.nav-pop-up')
  navButton.classList.add('hide')
}

// CODE TO SET FORCED LOADING CIRCLE

var preLoader = document.getElementById("preloader");
setInterval(() => {
  preLoader.style.display = "none";
}, 1000)

// LOOP TO ADD PRODUCT CARD DYNAMICALLY

for (var i=0; i < products.length; i++) {
  const productBody = document.querySelector('.product-body')

  const div = document.createElement('div')
  div.className = `col-lg-4 col-md-6 col-sm-12 mb-5 product-card-div d-flex justify-content-center ${products[i].category} hide`
  productBody.append(div)
  

  const divClothCard = document.createElement('div')
  divClothCard.className = 'cloth-card'
  div.append(divClothCard)

  const divCard = document.createElement('div')
  divCard.className = 'card card-hover'
  divCard.style.width = '18rem'
  divCard.style.borderRadius = '30px'
  divClothCard.append(divCard)

  const clothImage = document.createElement('img')
  clothImage.className = "card-img-top p-3"
  clothImage.alt = 'cloth image'
  clothImage.src = products[i].image
  clothImage.style.borderRadius = '30px'
  divCard.append(clothImage)

  const imageDiv = document.createElement('div')
  imageDiv.className = 'card-body'
  divCard.append(imageDiv)

  const cardTitle = document.createElement('p')
  cardTitle.className = 'card-title fw-lighter pt-0'
  cardTitle.style.fontFamily = 'Mukta'
  cardTitle.style.lineHeight = '1px'
  cardTitle.innerText = products[i].brandName
  imageDiv.append(cardTitle)

  const cardTitle2 = document.createElement('p')
  cardTitle2.className = 'cart-title pt-0'
  cardTitle2.setAttribute('data-product-name', products[i].brandName)
  cardTitle2.innerText = products[i].titleName
  imageDiv.append(cardTitle2)

  const cardTitleDiv = document.createElement('div')
  cardTitleDiv.className = 'row card-title-main'
  imageDiv.append(cardTitleDiv)

  const cardTitleDiv2 = document.createElement('div')
  cardTitleDiv2.className = 'col-9 pt-2'
  cardTitleDiv.append(cardTitleDiv2)

  const ratingImage = document.createElement('img')
  ratingImage.src = `../Images/ratings/rating-${products[i].rating.stars * 10}.png`
  ratingImage.className = 'row ps-2'
  ratingImage.style.width = '100px'
  ratingImage.style.lineHeight = '1px'
  cardTitleDiv2.append(ratingImage)

  const priceLine = document.createElement('div')
  priceLine.className = 'row pt-2 ps-2'
  priceLine.style.fontFamily = 'Mukta'
  priceLine.innerText = products[i].priceCents
  cardTitleDiv2.append(priceLine)
  
  const cartButton = document.createElement('button');
  cartButton.className = `col-3 btn btn-bg-white px-3 add-button`;
  cartButton.setAttribute('data-product-name', products[i].brandName)
  cartButton.setAttribute('data-product-price', products[i].priceCents)
  cartButton.setAttribute('data-product-image', products[i].image)
  cartButton.style.borderRadius = '30px'
  cartButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="56" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">' +
  '<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>' +
  '<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>' +
  '</svg>'
  cardTitleDiv.append(cartButton)
}

// FUNCTION INVOKED WHEN ADD TO CART BUTTON PRESSED

document.querySelectorAll('.add-button')
  .forEach(button => {
    button.addEventListener('click', () => {
      let obj = JSON.parse(localStorage.getItem('cartItem'))
      obj.push({
        titleName: button.dataset.productName ,
        priceCents: button.dataset.productPrice,
        image: button.dataset.productImage
      })
      console.log(obj)
      let setObj = JSON.stringify(obj)
      localStorage.setItem('cartItem', setObj)
      let obj2 = JSON.parse(localStorage.getItem('cartItem'))
      let cartNo = document.querySelector('.cart-value-js')
      cartNo.innerText = obj2.length
    })
  })

  function navButtonClicked() {
    const navButton = document.querySelector('.nav-pop-up')
    navButton.classList.toggle('hide')
  }
