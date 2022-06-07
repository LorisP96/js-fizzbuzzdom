const numCont = document.querySelector('.numbers-container');

for(let i = 1; i <= 100; i++) {

    let newBox;

    if (i % 3 === 0 && i % 5 === 0) {
        newBox = `<li class="box fizzbuzz">FizzBuzz</li>`;
    } else if (i % 5 === 0) {
        newBox = `<li class="box buzz">Buzz</li>`;
    } else if (i % 3 === 0) {
        newBox = `<li class="box fizz">Fizz</li>`;
    } else {
        newBox = `<li class="box">${i}</li>`;
    }

    numCont.innerHTML += newBox;
}



