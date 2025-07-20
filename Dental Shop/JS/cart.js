
let cartObject;

onLoad();
function onLoad(){
    cartBadge();    
    loadCartObject();
    displayCartProducts();
    priceSummary();
};



function loadCartObject(){
   cartObject = addToCartProducts.map(productSku => {

    for(let i=0;i < productArray.length; i++){

    if(productSku == productArray[i].sku) {
        return productArray[i];
        
    }
    }

    for(let i=0;i < bookArray.length; i++){

    if(productSku == bookArray[i].sku) {
        return bookArray[i];
        
    }
    }
})
};
    
function displayCartProducts(){
    let cartContainer = document.querySelector('.cart-container');  
    let newHtml = ``;
    cartObject.forEach(element => {
            newHtml += `
            <div class="row">
              <div class="col-12">
                <div class="card d-flex flex-row position-relative">
                  <button
                    class="btn-close position-absolute top-0 start-95"
                    onclick ="removeProduct(${element.sku})"
                  ></button>
                  <img
                    src="${element.image}"
                    class="card-img-top w-50"
                    alt="micromotor-image"
                  />
                  <div class="card-body">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <div class="btn btn-primary py-0">
                        <span
                          ><i class="fa fa-star" aria-hidden="true"></i>
                        </span>
                        ${element.ratings.rating}
                      </div>
                      <div class="text-body-secondary">${element.ratings.numbers}</div>
                    </div>

                    <h4 class="card-title">${element.company}</h4>

                    <p class="card-text">${element.description}</p>
                    <p>
                      <span class="me-2">Starting at</span
                      ><span class="fw-bolder fs-5"
                        ><i class="fa fa-inr" aria-hidden="true"></i> ${element.price}</span
                      ><span
                        class="text-decoration-line-through text-muted ms-1"
                        >${element.oldPrice}</span
                      >
                    </p>

                    <p class="fw-bolder">
                      <i
                        class="fa fa-truck text-secondary"
                        aria-hidden="true"
                      ></i>
                      Delivery Expected in 2-3 Days
                    </p>
                  </div>
                </div>
                </div>
            </div>
            `

});
if (newHtml != ``){
    cartContainer.innerHTML = newHtml;
    } else {
        cartContainer.innerHTML = `<p class="text-center fw-semibold fs-2 text-secondary">Oh No! Your Cart is Empty. 
        Add Some Amazing Products.</p>`
    }
}

function priceSummary(){
    let priceContainer = document.querySelector('.price-container');
    let totalMRP = 0;
    let discount = 0;
    let finalAmount = 0;

    cartObject.forEach(element => {
        totalMRP += element.oldPrice;
        discount += element.oldPrice - element.price;
        finalAmount += element.price;

}
    );
  

    priceContainer.innerHTML = ` <div class="card">
              <div class="card-header fw-bolder text-secondary">
                PRICE DETAILS
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between mb-2">
                  <span>Total MRP</span>
                  <span><i class="fa fa-inr" aria-hidden="true"></i> ${totalMRP}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Discount On Total MRP</span>
                  <span class="text-success"
                    >- <i class="fa fa-inr" aria-hidden="true"></i> ${discount}</span
                  >
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Coupon Discount</span>
                  <span class="text-primary">Apply Coupon</span>
                </div>
                <div class="d-flex justify-content-between mb-4">
                  <span>Delivery Charge</span>
                  <span>
                    Free
                    <span class="text-decoration-line-through text-muted"
                      >₹100</span
                    >
                  </span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="fw-bold">Total Amount</span>
                  <span class="fw-bold"
                    ><i class="fa fa-inr" aria-hidden="true"></i> ${finalAmount}</span
                  >
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary w-100 fw-semibold">
                  PLACE ORDER
                </button>
              </div>
            </div>`
}

function removeProduct(productSku){
       addToCartProducts = addToCartProducts.filter(elementID => elementID != productSku);
        localStorage.setItem('cartProducts',JSON.stringify(addToCartProducts));
       loadCartObject();
       cartBadge();
       displayCartProducts();
       priceSummary();

         

};
