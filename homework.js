// -------------------------- Home work 2 --------------------------
// -------------------------- Bondar Dmitry --------------------------


// --------------------------Преобразование примитивов. Задачи----------


// 1. Чему равно а, почему?

let a = 0 || 'string'; // string   так как данный оператор запинается на true и возвращает не будевое значение.

let a = 1 && 'string'; // string   возвращает последнее значение если все значения true или false.

let a = null || 25; // 25   возвращает true, a null = false.

let a = null && 25; // null   возвращает первую false.

let a = null || 0 || 35; // 35   возвращает первую true, нули не есть true.

let a = null && 0 && 35; // null   возвращает первую false.


// 2. Что отобразится в консоли. Почему?

12 + 14 + '12' // 2612   первые две операнды - числа, произойдет сложение. Последняя операнда - строка, она приклеится к предыдущему результату справа.

3 + 2 - '1' // 4   вычитание преобразует строку в число и 1 вычтется из 5.

'3' + 2 - 1 // 31   сперва произойдет вычитание, после чего 3 приклеится слева.

true + 2 // 3   true равнятся единице, в итоге получим 1 + 2.

+'10' + 1 // 11   оператор + перед операндой преобразует её в число.

undefined + 2 // NaN   undefined не складывается с числами

null + 5 // 5   т.к 0 + 5 = 5

true + undefined // NaN   undefined не складывается с числами, а true = 1. 


//-------------------------If else. Задачи.--------------------------------


// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let obj = "hidden";

if (obj === "hidden") {
    obj = "visible";
} else {
    obj = "hidden";
}

// 2. Используя if, записать условие:
        // если переменная равна нулю, присвоить ей 1;
        //если меньше нуля - строку “less then zero”;
        // если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

if (x === 0) {
        x = 1;
} else if (x < 0) {
        x = 'less then zero';
} else if (x > 0) {
        x *= 10;
}
 

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.



let car = { 
        name: 'Lexus', 
        age: 10, 
        create: 2008, 
        needRepair: false
}

if (car.age > 5) {
        console.log('Need Repair');
        car.needRepair = true;
} else {
        car.needRepair = false;
}


// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { 
        name: 'Intel core i7', 
        price: '100$', 
        discount: '15%' 
}
        
if (item.discount) {
        item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * parseFloat('0.' + item.discount));
        console.log(item.priceWithDiscount + '%');
} else {
        console.log(item.price);
}


// 5. Дан следующий код:

let product = {
        name: 'Яблоко',
        price: '10$'
    };
    
    let min = 10; // минимальная цена
    let max = 20; // максимальная цена
    
//  Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
        console.log(product.name);
} else {
        console.log('Товаров не найдено');
}


//-------------------------Тернарный оператор. Switch case. Задачи.---------------------------


// 1. Записать в виде switch case следующее условие:
// if (a === 'block') {
// 	console.log('block')
// } else if (a === 'none') {
// 	console.log('none')
// } else if (a === 'inline') {
// console.log('inline')
// } else {
// 	console.log('other')
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

switch (a) {
        case 'block':
                console.log('block');
                break;
        case 'none':
                console.log('none');
                break;
        case 'inline':
                console.log('inline');
                break;
        default:
                console.log('other')
}


// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

// 1) Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

obj = 'hidden' ? obj = 'visible' : obj = hidden;

// 2) Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
//  если меньше нуля - строку “less then zero”;
//  если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
 

let x = -2;

x === 0? x = 1
        : x < 0 ? x = 'less then zero' : x *= 10;

// 3) Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { 
        name: 'Lexus', 
        age: 10, 
        create: 2008, 
        needRepair: false 
}

car.age > 5 ? (console.log('Nedd Repair'), car.needRepair = true) : car.needRepair = false;





