(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fruitForm = document.querySelector('#inputSection form') //trap the form by fidning it on the webpage
const fruitList = document.querySelector('#fruitSection ul') //trap the list by finding it on the webpage
const fruitNutrition = document.querySelector('#nutritionSection p')
fruitForm.addEventListener('submit', extractFruit) //submit is the type of listener not the button 

let cal = 0
let fruitCal = {}
let API_KEY = "58059260-b104d0b24b87fac2ba4f5de82"

function extractFruit(e){ //e is the placeholder for the thing submitted 
    e.preventDefault() //prevents the page from refreshing
    fetchFruitData(e.target.fruitInput.value);
    e.target.fruitInput.value = "" //makes the search bar empty when something is submitted
}

function addFruit(fruit, fruitImg){
    const li = document.createElement('li') //create an element
    const img = document.createElement('img')
    img.src = fruitImg.hits[0].previewURL

    li.textContent = fruit.name //just the text inside it, innerHTML is a string of all the HTML. This is pulling out just the name part of the fruit object
    li.appendChild(img)

    li.addEventListener('click', removeFruit) //works directly on the elemnts in the list.
    fruitList.appendChild(li) //appends items to the end of a list

    fruitCal[fruit.name] = fruit.nutritions.calories
    cal += fruit.nutritions.calories
    fruitNutrition.textContent = cal //this will place the value of cal in the empty p tag in the nutritiion section in the html file
}

function removeFruit(e){
    const fruitName = e.target.textContent //removes the target fruit (e)
    cal -= fruitCal[fruitName]
    fruitNutrition.textContent = cal
    e.target.remove()
}

async function fetchFruitData(fruit) {
    try {
        const resp = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`);
        const resp1 = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${fruit}`)
        if (resp.ok && resp1.ok) {
            const data = await resp.json();
            const data1 = await resp1.json()
            addFruit(data, data1);
        } else {
            throw "Something has gone wrong";
        }
    } catch (e) {
        console.log(e);
    }
}


/* this can all be replaced by the above function
function fetchFruitData(fruit){
    fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
    .then(procesResponse) //turns the string into a json and catches error
    .then(data => addFruit(data)) //adds onto the other then, method chaining
    .catch(e => console.log(e)) //catches errors 
}

function procesResponse(resp){
    if (resp.ok) {//javascript way of saying if it is a 200 value(a perfectly running page)
    return resp.json}
    else {
        throw "Error: hhtps status code = " + resp.status
    }
}
*/








},{}]},{},[1]);
