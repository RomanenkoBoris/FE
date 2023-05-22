let test = [[1, 2], ["x", "y"], "Andrey"];
console.log(test[1][1]);

function average(array) {
  let summ = 0;
  for (i = 0; i < array.length; i++) {
    summ += array[i];
  }
  return summ / array.length;
}

let num = +prompt("Enter a number");
function discount(num) {
  return num * 0.85;
}

let number = +prompt("Enter a number");
function hundret(number) {
  if (number < 100) {
    alert("число меньше 100");
  } else if (number > 100) {
    alert("число больше 100");
  } else {
    alert("число равно 100");
  }
}

const name = 'Ivan';
const age = 30;
const message = `Привет, меня зовут ${name} и мне ${age} лет`;
console.log(message);

const article1 = {title: 'Iphone', price: 800, quantity: 50};
const article2 = {title: 'Samsung', price: 500, quantity: 39};
const article3 = {title: 'Nokia', price: 200, quantity: 19};
function corency (article1, article2, article3){
    let max_article = article1.title;
    let max_pice = article1.price;
    if (article2.price > max_pice){
        max_pice = article2.price;
        max_article = article2.title;
    } if (article3.price > max_pice){
        max_pice = article3.price;
        max_article = article3.title;
    }
    alert(`Самый дорогой товар ${max_article} стоит ${max_pice} EUR`)
}
function currency (article){
    return article.price * 1.1;
}