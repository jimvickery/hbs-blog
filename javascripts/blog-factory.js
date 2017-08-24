"use strict";
console.log('inside of blog factor');

let blogs = [];
let blogMethods = {};


function fillBlogs(data) {
    let keys = Object.keys(data);
        keys.forEach((item)=> {
            console.log('book keys', keys);
            data[item].firebaseID = item;
            blogs.push(data[item]);
});
console.log("blogs from array", blogs);
}  

// load ajax data
blogMethods.getAuthors = () => {
    return new Promise (function(resolve, reject){
        $.ajax({
            url: 'authors.json'

        })
        .done (function(data){
            console.log('authors', data);
            fillBlogs(data);
            resolve(data);     
        })
        .fail(reject);
    });


};
   


module.exports = blogMethods;