let getFactBtn = document.getElementsByClassName('get-fact')[0];
let ranFactBtn = document.getElementsByClassName('rand-fact')[0];
let fact = document.querySelector('.fact');
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl)
        .then((resp) => resp.text())
        .then(data => {
            fact.innerHTML = `<h2>${num}</h2><p class="para">${data}</p>`;
            document.querySelector('.main').append(fact);
        });
};

let getFact = () => {
    let num = document.getElementsByClassName('inp-num')[0].value; // Access first element
    if (num) {
        if (num >= 0 && num <= 1000) {
            fetchFact(num);
        } else {
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg">Please enter a number between 0 to 300.</p>`;
        }
    } else {
        fact.style.display = "block";
        fact.innerHTML = `<p class="msg">The input field cannot be empty</p>`;
    }
};

let getRandomFact = () => {
    let num = Math.floor(Math.random() * 301);
    fetchFact(num);
};

getFactBtn.addEventListener("click", getFact);
ranFactBtn.addEventListener("click", getRandomFact);

    // window.addEventListener("load", getRandomFact);
