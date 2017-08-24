"use strict";
// This is a demo for Handlebars
console.log('main.js');

let Handlebars = require('hbsfy/runtime');
let blogTemplate = require('../templates/blog-template.hbs');
let authorList = require('./blog-factory');

Handlebars.registerHelper("incrementer", (value) => parseInt(value) + 1);



//method that uses a promise to the the data from blog-factory
//return promise 
authorList.getAuthors () 
.then( 
    (stuff) => {
        console.log('Blog Promise', stuff);
        populatePage(stuff);
    },
    (reject) => {
        console.log('SOMETHING IS WRONG WITH THE PROMISE');

});




function populatePage(stuff) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = blogTemplate(stuff);
    $("#blog-cards").append(newDiv);
}





