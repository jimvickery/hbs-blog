"use strict";
// This is a demo for Handlebars
console.log('main.js');

let Handlebars = require('hbsfy/runtime');
let blogTemplate = require('../templates/blog-template.hbs');
let authorList = require('./blog-factory');

Handlebars.registerHelper("incrementer", (value) => parseInt(value) + 1);

function populatePage(stuff) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = blogTemplate(stuff);
    $("#blog-cards").append(newDiv);
}
//return promise 
authorList.getAuthors () 
.then( 
    (inventoryFromLoadInventoryResolve) => {
        console.log('Blog Promise', inventoryFromLoadInventoryResolve);
        populatePage(inventoryFromLoadInventoryResolve);
    },
    (reject) => {
        console.log('SOMETHING IS WRONG WITH THE PROMISE');

});





