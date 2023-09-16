// Условие

// 2 == 2 - не строгое сравнение,сравнивает оба значения между собой
// 2 === 2 - строгое сравнение,сравнивает оба значения и тип между собой

// if(1 === '1') {
//     console.log('Good');
// }else {
//     console.log('bad');
// }

// var a =  +prompt('Введите свою оценку');

// if(a === 5) {
//     console.log('Покупаем iphone');
// }else if(a === 4) {
//     console.log('Покупаем airpods');
// }else if(a === 3) {
//     console.log('Живи');
// }else {
//     console.log('The end');
// }

// || - оператор или
// && - оператор и

// var word = prompt('Введите слово для входа');

// if(word == 'admin' || word == 'админ' || word == 'zafar') {
//     console.log('Доступ открыт');
// }else {
//     console.log('Доступ закрыт');
// }

//  ! - оператор не - ставиться перед значением или функцией - возвращает противоположное значение

// isNaN() - функция проверяет на NaN если внутри NaN то отдаст true иначе false

// var one = prompt('Введите первое число')
// var two = prompt('Введите второе число')

// if(one > two && !isNaN(one) && !isNaN(two) ) {
//     console.log(one + ' больше чем ' + two);
// }else if(two > one) {
//     console.log(two + ' больше чем ' + one);
// }else if(one == two) {
//     console.log(one + ' равен ' + two);
// }else {
//     console.log('Вы ввели не число');
// }

// var day = +prompt('Введите день недели');
let tempString = 0;
let timeHour = document.querySelector('.time-hour-text');
let timeMinute = document.querySelector('.time-minute-text');
let timeInform = document.querySelector('.time-info');

let hour = +prompt('введите час');
timeHour.textContent = hour;
console.log(hour);

// if (isNaN(hour)) {
//   console.log('incorrect input');
//   timeHour.textContent = 'Error';
//   timeInform.textContent = 'Error';
//   alert('Error');
// } else {
switch (hour) {
  case 0:
    timeHour.textContent = '0';
    timeInform.textContent = '0 часов ночи';
    alert('0 часов ночи');
    myImg.src = 'images/night.jpg';
    break;
  case 1:
    alert('1 час ночи');
    timeHour.textContent = '1';
    timeInform.textContent = '1 час ночи';
    myImg.src = 'images/night.jpg';
    break;
  case 2:
    alert('2 часа ночи');
    timeHour.textContent = '2';
    timeInform.textContent = '2 часа ночи';
    myImg.src = 'images/night.jpg';
    console.log('timeInform');
    break;
  case 3:
    alert('3 часа ночи');
    timeHour.textContent = '3';
    timeInform.textContent = '3 часа ночи';
    console.log('timeInform');
    myImg.src = 'images/night.jpg';
    break;
  case 4:
    alert('4 часа ночи');
    timeHour.textContent = '4';
    timeInform.textContent = '4 часа ночи';
    console.log('timeInform');
    myImg.src = 'images/night.jpg';
    break;
  case 5:
    alert('5 часов ночи');
    timeHour.textContent = '5';
    timeInform.textContent = '5 часов ночи';
    console.log('timeInform');
    myImg.src = 'images/night.jpg';
    break;
  case 6:
    alert('6 часов ночи');
    timeHour.textContent = '6';
    timeInform.textContent = '6 часов ночи';
    console.log('timeInform');
    myImg.src = 'images/night.jpg';
    break;
  case 7:
    alert('7 часов утра');
    timeHour.textContent = '7';
    timeInform.textContent = '7 часов утра';
    console.log('timeInform');
    myImg.src = 'images/morning.jpg';
    break;
  case 8:
    alert('8 часов утра');
    timeHour.textContent = '8';
    timeInform.textContent = '8 часов утра';
    console.log('timeInform');
    myImg.src = 'images/morning.jpg';
    break;
  case 9:
    alert('9 часов утра');
    timeHour.textContent = '9';
    timeInform.textContent = '9 часов утра';
    console.log('timeInform');
    myImg.src = 'images/morning.jpg';
    break;
  case 10:
    alert('10 часов утра');
    timeHour.textContent = '10';
    timeInform.textContent = '10 часов утра';
    console.log('timeInform');
    myImg.src = 'images/morning.jpg';
    break;
  case 11:
    alert('11 часов дня');
    timeHour.textContent = '11';
    timeInform.textContent = '11 часов дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 12:
    alert('12 часов дня');
    timeHour.textContent = '12';
    timeInform.textContent = '12 часов дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 13:
    alert('1 час дня');
    timeHour.textContent = '1';
    timeInform.textContent = '1 час дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 14:
    alert('2 часа дня');
    timeHour.textContent = '2';
    timeInform.textContent = '2 часа дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 15:
    alert('3 часа дня');
    timeHour.textContent = '3';
    timeInform.textContent = '3 часа дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 16:
    alert('4 часа дня');
    timeHour.textContent = '4';
    timeInform.textContent = '4 часа дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 17:
    alert('5 часов дня');
    timeHour.textContent = '5';
    timeInform.textContent = '5 часов дня';
    console.log('timeInform');
    myImg.src = 'images/day.jpg';
    break;
  case 18:
    alert('6 часов вечера');
    timeHour.textContent = '6';
    timeInform.textContent = '6 часов вечера';
    console.log('timeInform');
    myImg.src = 'images/evening.jpg';
    break;
  case 19:
    alert('7 часов вечера');
    timeHour.textContent = '7';
    timeInform.textContent = '7 часов вечера';
    console.log('timeInform');
    myImg.src = 'images/evening.jpg';
    break;
  case 20:
    alert('8 часов вечера');
    timeHour.textContent = '8';
    timeInform.textContent = '8 часов вечера';
    console.log('timeInform');
    myImg.src = 'images/evening.jpg';
    break;
  case 21:
    alert('9 часов вечера');
    timeHour.textContent = '9';
    timeInform.textContent = '9 часов вечера';
    console.log('timeInform');
    myImg.src = 'images/evening.jpg';
    break;
  case 22:
    alert('10 часов вечера');
    timeHour.textContent = '10';
    timeInform.textContent = '10 часов вечера';
    console.log('timeInform');
    myImg.src = 'images/evening.jpg';
    break;
  case 23:
    alert('11 часов вечера');
    timeHour.textContent = '11';
    timeInform.textContent = '11 часов вечера';
    console.log('timeInform');
    myImg.src = 'images/evening.jpg';
    break;

  default:
    alert('Error');
    break;
}
