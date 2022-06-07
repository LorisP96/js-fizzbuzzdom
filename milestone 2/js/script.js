const numCont = document.querySelector('.number-container');

for(let i = 1; i <= 100; i++) {

    let newBox;

    if (i % 3 === 0 && i % 5 === 0) {
        newBox = `<li class="box">FizzBuzz</li>`;
        console.log(newBox)
    } else if (i % 5 === 0) {
        newBox = `<li class="box">Buzz</li>`;
        console.log(newBox)
    } else if (i % 3 === 0) {
        newBox = `<li class="box">Fizz</li>`;
        console.log(newBox)
    } else {
        newBox = `<li class="box">${i}</li>`;
        console.log(newBox)
    }

    numCont.innerHTML += newBox
}



