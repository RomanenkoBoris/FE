// Задание 1. Написать функцию, которая получает один аргумент (массив целых чисел) и возвращает сумму положительных элементов.

function summ_positive (array){
    let summ = 0;
    for (let i = 0; i < array.length; i++);
    if (array[i] >= 0) {
        summ += i;
    }
    return summ;
}

// Задание 2. Написать функцию, которая получает один аргумент (массив целых чисел) и возвращает наибольшее число из массива.

function find_the_biggest (array) {
    let big = array[0];
    for (let i = 1; i < array.length; i++){
        if (big < array[i]){
            big = array[i];
        }
    return big;    
    }
}

// Задание 3. Написать функцию, которая вычисляет площадь окружности.

function circle_area (radius){
    let area = 3.14 * radius**2;
    return area;
}
