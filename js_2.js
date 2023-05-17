// выводит приветствие
function hello() {
    alert('hello!');
}

// складывает два числа
//function summator(num1, num2) {
//    return num1 + num2;
// }
// alert(summator(10, 5));

let names = ['Ivan', 'Andrei', 'Svetlana']

names[names.length-1] = 'Linux User'

names.push('Sasha'); // добавить новый элемент вконкец
names.unshift('Tester'); // добавить вначало
let last_elememt = names.shift(); // извлечь последний элемент, поместив его в переменную
let first_element = names.shift(); // извлечь первый элемент, поместив его в переменную
let index = names.indexOf('Andrei'); // найти индекс элемента
console.log(names);

function odd_or_even (any_number){
    if (any_number % 2 == 0) {
        return 'число четное';
    } else {
        return 'число не четное';
    }
}

function is_even (any_number){
    return any_number % 2 == 0;
}

function apply_discount (priсe, discount){
    return priсe * (1 - discount/100);
}
console.log(apply_discount(800, 12))

// отрицательно ли вводимое число?
function is_negative (num){
return num < 0;
}


for (let n=1; n < 11; n++){
   if (n%2 != 0) { console.log(n)}
}

function sum (start, end){
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum
}

const users = [
    ['Ivan', 20, 'ivan@example.org'],
    ['Petr', 30, 'petr@example.org'],
    ['Pavel', 40, 'pavel@example.org']
 ];
 
 console.log(users[1][1]);

