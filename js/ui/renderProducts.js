export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="result">
                                        <i class="far fa-heart"></i>
                                        <h4> ${product.title}</h4>
                                         <p> ${product.price} $ </p>
                                         <button>Remove</button>
                                         </div>`;
    }); 
}