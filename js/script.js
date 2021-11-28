import { products } from "./data/products.js";
const productContainer = document.querySelector(".product-container");
// import displayMessage from "./ui/displayMessage.js";
const search = document.querySelector (".search");
const wishlist = document.querySelector (".wishlist");
// const url = "https://fakestoreapi.com/products";

let productsToRender = products;

function renderProducts() {
    productContainer.innerHTML = "";

    productsToRender.forEach((product) => {
            productContainer.innerHTML += `<div class="result">
                                        <i class="far fa-heart" data-id="${product.id}" data-name="${product.title}"></i>
                                        <h4> ${product.title}</h4>
                                         <p> ${product.price} $ </p>
                                         </div>`;
        }); 

    const favButtons = document.querySelectorAll(".result i");

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.title;  

    const currentFavs = getExistingFavs()

    const product = { id: id, name: name };

    currentFavs.push(product);

    saveFavs(currentFavs);
    }

    function  getExistingFavs() {
        const favs = localStorage.getItem("wishlist");

        if(favs === null) {
            return [];
        } else {
            return JSON.parse(favs);
        }
    }

function saveFavs(favs) {
    localStorage.setItem("wishlist", JSON.stringify(favs));
}
} 

renderProducts();

// Search

    search.onkeyup = function (event) {
    
        const searchValue = event.target.value.trim();
    
        const filteredProducts = products.filter(function (product) {
            if(product.price <= searchValue) {
               return true;
            }
        });
        
        //console.log(filteredProducts);

        productsToRender = filteredProducts;

        renderProducts();
    };

 