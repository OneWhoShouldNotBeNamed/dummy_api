const http = require('http');
const url = require('url');

const fruits = require('./fruits');

function onPageLoad() {
    console.log('loaded')
    fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(d) {
            makeList(d)
        })
}