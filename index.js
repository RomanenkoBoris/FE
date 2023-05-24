// let element = document.querySelector('#main');

// console.log(element.textContent);
// element.textContent = 'Bye'

function calc_area() {
    const radius = document.querySelector('#radius').value;
    
    const area = 3.14 * radius ** 2;

    let result = document.querySelector('#result');
    result.textContent = area;
}