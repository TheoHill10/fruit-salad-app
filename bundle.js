(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fruitForm = document.querySelector('#inputSection form') //trap the form by fidning it on the webpage
const fruitList = document.querySelector('#fruitSection ul') //trap the list by finding it on the webpage
fruitForm.addEventListener('submit', extractFruit) //submit is the type of listener not the button 

function extractFruit(e){
    e.preventDefault() //prevents the page from refreshing
    addFruit(e.target.fruitInput.value);
    e.target.fruitInput.value = "" //makes the search bar empty when something is submitted
}

function addFruit(fruit){
    const li = document.createElement('li') //create an element
    li.textContent = fruit //just the text inside it, innerHTML is a string of all the HTML
    li.addEventListener('click', removeFruit)
    fruitList.appendChild(li) //appends items to the end of a list
}

function removeFruit(e){
    e.target.remove()
}







},{}]},{},[1]);
