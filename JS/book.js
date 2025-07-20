

let bookArray = [
  {
    sku : '11',
    image: "/images/books/endo.jpg",
    ratings: {
      rating: 4.3,
      numbers: 1392,
    },
    company: "GROSSMAN'S ENDODONTIC PRACTICE",
    description: "14th EDITION || V.Gopalkrishna",
    price: 1500,
    oldPrice: 2000,
    
  },
  {
    sku : '12',
    image: "/images/books/ortho.jpg",
    ratings: {
      rating: 4.5,
      numbers: 3000,
    },
    company: `Bhalajis's Orthodontics
    (The Art & Science)`,
    description: "8th EDITION || S.I.Bhalaji ",
    price: 800,
    oldPrice: 1200,
  },
  {
    sku : '13',
    image: "/images/books/OS.jpg",
    ratings: {
      rating: 4.8,
      numbers: "1.2k",
    },
    company: "ORAL & MAXILLOFACIAL SURGERY",
    description: "4th EDITION || SM Balaji",
    price: 1200,
    oldPrice: 2000,
  },
  {
    sku: '14',
    image: "/images/books/phd.jpg",
    ratings: {
      rating: 4.0,
      numbers: 100,
    },
    company: "PUBLIC HEALTH DENTISTRY",
    description: "8th EDITION || Soben Peter",
    price: 699,
    oldPrice: 999,
  },
  {
    sku : '15',
    image: "/images/books/phillips.jpg",
    ratings: {
      rating: 4.2,
      numbers: 2700,
    },
    company: "DENTAL MATERIALS",
    description: "First South Asia Edition || Arvind Shenoy",
    price: 800,
    oldPrice: 1199,
  },
  {
    sku : '016',
    image: "/images/books/prosthodontics.jpg",
    ratings: {
      rating: 4.2,
      numbers: 1100,
    },
    company: "PROSTHODONTICS",
    description: "3rd EDITION || Rangarajan",
    price: 1199,
    oldPrice: 1599,
  },
  
];


  let bookContainer = document.querySelector("#book-container");


function addProducts() {

  let newHtml = ``;
  bookArray.forEach(
    (element) =>
      
      {newHtml += `
 <div class="col-lg-4">
            <div class="card h-100">
              <img src="${element.image}" class="card-img-top " alt="micromotor-image" />
              <div class="card-body">
                <div class="d-flex align-items-center  gap-2 mb-2">
                  <div class="btn btn-primary py-0 ">
                    <span><i class="fa fa-star" aria-hidden="true"></i> </span
                    >
                   ${element.ratings.rating} 
                  </div>
                  <div class="text-body-secondary">${element.ratings.numbers}</div>
                </div>
               
                  <h4 class="card-title">${element.company}</h4>
              
                <p class="card-text">
                  ${element.description}

                </p>
                <p><span class="me-2">Starting at</span><span class="fw-bolder fs-5"><i class="fa fa-inr" aria-hidden="true"></i>
${element.price}</span><span class="text-decoration-line-through text-muted ms-1">${element.oldPrice}</span></p>

<button type="submit"  class="btn btn-outline-primary  w-100" onclick="addToCart(${element.sku}) ;">Add to Cart</button>
              </div>
            </div>
          </div>
         `}
  );
  bookContainer.innerHTML = newHtml;
}



function addToCart(productSku) {
  addToCartProducts.push(productSku);
  localStorage.setItem('cartProducts', JSON.stringify(addToCartProducts));
  cartBadge();
}

function cartBadge() {
  let badgeIcon = document.querySelector("#bag-items-badge");
  if(addToCartProducts.length > 0){
    badgeIcon.style.visibility = 'visible';
  badgeIcon.innerText = addToCartProducts.length;
  } else {
    badgeIcon.style.visibility = 'hidden';
  }
}


function onPageLoad() {
  if(bookContainer !== null){
  addProducts();
  }
  cartBadge();

}
onPageLoad();

