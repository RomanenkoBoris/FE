// Задание 1. Дайте ответ на вопрос, что такое объект в JS.
// На мой взгляд, объект в JS представляет из себя набор свойств, появященных единой тематике и реализуемых в виде ассоциативного массива, в котором каждое свойство отражено в виде "ключ-значение".

// Задание 2. Напишите функцию, которая принимает товары (массив объектов) и возвращает строку 'Самый дорогой товар <НАЗВАНИЕ> стоит  EUR'.

let products = [
  { title: "Iphone", price: 800, quantity: 50 },
  { title: "Samsung", price: 500, quantity: 39 },
  { title: "Nokia", price: 200, quantity: 19 },
];

function most_expensive(products) {
  let expensive = products[0];
  for (let i = 1; i < products.length; i++) {
    if (expensive.price < products[i].price) {
      expensive = products[i];
    }
  }
  alert(`Самый дорогой товар ${expensiv.title} стоит ${expensiv.price} EUR`);
}

// Задание 3. Напишите функцию, которая принимает товары (массив объектов) и возвращает их общую сумму (скаляр).

let products2 = [
  { title: "Iphone", price: 800, quantity: 50 },
  { title: "Samsung", price: 500, quantity: 39 },
  { title: "Nokia", price: 200, quantity: 19 },
];

function total_summ(products) {
  let summ = 0;
  for (let i = 0; i < products.length; i++) {
    summ += products[i].price;
  }
  alert(`Общая сумма товаров составляет ${summ} EUR`);
}
