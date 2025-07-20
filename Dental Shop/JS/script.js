

let productArray = [
  {
    sku : '001',
    image: "/images/micromotor.webp",
    ratings: {
      rating: 4.3,
      numbers: 123,
    },
    company: "Waldent Micromotor",
    description: "high-tech micromotor with 3000 rpm speed",
    price: 1500,
    oldPrice: 2500,
    
  },
  {
    sku : '002',
    image: "/images/shield.webp",
    ratings: {
      rating: 3.0,
      numbers: 123,
    },
    company: "Protective Shield",
    description: " high-quality  protective shield with plastic frame ",
    price: 300,
    oldPrice: 700,
  },
  {
    sku : '003',
    image: "/images/loupes.webp",
    ratings: {
      rating: 4.5,
      numbers: "1.2k",
    },
    company: "Dental Loupes",
    description: "High magnifying dental loupes with detachable  glasses",
    price: 15000,
    oldPrice: 25000,
  },
  {
    sku: '004',
    image: "/images/endomotor.webp",
    ratings: {
      rating: 4.7,
      numbers: 5000,
    },
    company: "Waldent Endomotor",
    description: "high-tech endomotor with  light for better visibility",
    price: 7999,
    oldPrice: 10999,
  },
  {
    sku : '005',
    image: "/images/gic.webp",
    ratings: {
      rating: 4.0,
      numbers: 3000,
    },
    company: "GIC Cement",
    description: "Premium quality GIC cement with plastic spatula",
    price: 800,
    oldPrice: 1500,
  },
  {
    sku : '006',
    image: "/images/composite.webp",
    ratings: {
      rating: 4.1,
      numbers: 500,
    },
    company: "Dentsply Composit",
    description: "hybrid restorative composite material kit",
    price: 1500,
    oldPrice: 2500,
  },
  {
    sku : '007',
    image: "/images/vita.webp",
    ratings: {
      rating: 4.5,
      numbers: "10k",
    },
    company: "Vita Color Shades",
    description: "tooth shade selection guide kit with wide range of shades",
    price: 6000,
    oldPrice: 8000,
  },
  {
    sku : '008',
    image: "/images/io-scan.webp",
    ratings: {
      rating: 4.3,
      numbers: 100,
    },
    company: "Intra-oral Scanner",
    description: "3d-intral-oral scanner machine with software",
    price: 49999,
    oldPrice: 69999,
  },
  
];



  let rowContainer = document.querySelector("#rowContainer");

function addProducts() {

  let newHtml = ``;
  productArray.forEach(
    (element) =>
      
      {newHtml += `
 <div class="col-lg-3">
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
  rowContainer.innerHTML = newHtml;
}



let addToCartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

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
  if(rowContainer !== null){
  addProducts();
  }
  cartBadge();

}
onPageLoad();

