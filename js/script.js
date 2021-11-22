import { publishers } from "./constants/publishers.js";
const simulateError = false;
const limit = 10;

//const url ="https://fakestoreapi.com/products";

const resultsContainer = document.querySelector(".results");

function createProducts(products) {
    let html = "";

    products.forEach(function (product) {
        html += `<span class=product">${product.title}</span>`;
    });

    return html;
}

function displayMessage(messageType, message) {
    return `div class="message ${messageType}">${message}</div>`;
}

function createPublisher(publisher) {
    return `div class="result">
                ´<h4>${publisher.title}</h4>
                <div class="price">${createProducts(publisher.price)}</div>
                </div>`
}

resultsContainer.innerHTML= "";

try {
    if (simulateError) {
        throw "Bad things happend";
    }

    for (let i = 0; i < publishers.length; i++) {
        //exit loop
        if (limit && i === limit) {
            break;
        }

        resultsContainer.innerHTML += createPublisher(publishers[i]);
    }
} catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayMessage("error", error);
}
/*
async function getProducts() {
try {
    const response = await fetch(url);

    const results = await response.json();

    const facts = results;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].title);

        resultsContainer.innerHTML += `<div class="result">Title: ${facts[i].title}</div><div class="result">Price: ${facts[i].price}</div>`;
    } 
   
    } catch (error) {
        resultsContainer.innerHTML = displayError("Something wrong happend");
    }    
}

getProducts();
*/