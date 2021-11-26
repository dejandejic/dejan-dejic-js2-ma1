import { renderProducts } from "./ui/renderProducts.js";
function searchProducts (products) {

    search.onkeyup = function (event) {
        //console.log(event);
    
        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredProducts = products.filter(function (product) {
            if(product.title.toLowerCase().startsWith(searchValue)) {
               return true;
            }
        });
        
        console.log(filteredProducts);

        productsToRender = filteredProducts;

        renderProducts(filteredProducts);
    };
    
}