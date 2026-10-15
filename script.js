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






