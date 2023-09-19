let tempString = 0;
let timeHour = document.querySelector('.time-hour-text');
let timeMinute = document.querySelector('.time-minute-text');
let timeInform = document.querySelector('.time-info');

//indexOf("a") - ф-ция поиска позиции элемета 'a'
//slice(a,b) - ф-ция вырезает часть строки с позиции a, до позиции b

let testString = prompt('Enter the time in hh/mm format');
// console.log(testString);
let posSymbol = testString.indexOf('/');
// console.log(posSymbol);
let hour = testString.slice(0, posSymbol);
// console.log(hour);
let minute = testString.slice(posSymbol + 1);
// console.log(minute);

if (hour > 23 || minute > 59) {
  alert('Error');
  // minute = '00';
  // timeMinute.textContent = minute;
} else {
  // console.log('hour - ' + hour);
  // console.log('minute - ' + minute);
  // console.log(hour.slice(0, 1));
  if (hour.slice(0, 1) == 0) {
    hour = hour.slice(posSymbol - 1);
    console.log('hour - ' + hour);
    console.log('minute - ' + minute);
    // minute = testString.slice(posSymbol + 1);
    timeMinute.textContent = minute;
    // console.log('timeMinute - ' + timeMinute);
    // console.log('hour - ' + hour);
  } else {
    timeMinute.textContent = minute;
    // hour = hour;
    // timeHour.textContent = hour;

    console.log('hour - ' + hour);
    console.log('minute - ' + minute);
    // console.log('hour - ' + hour);
  }

  // let hour = +prompt('введите час');
  // timeHour.textContent = hour;
  // console.log(timeHour.textContent);
  // console.log(hour);

  switch (+hour) {
    case 0:
      timeHour.textContent = '0';
      timeInform.textContent = '0 часов ночи  ' + minute + ' минут';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      myImg.src = 'images/night.jpg';
      break;
    case 1:
      timeHour.textContent = '1';
      timeInform.textContent = '1 час ночи  ' + minute + ' минут';
      myImg.src = 'images/night.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 2:
      timeHour.textContent = '2';
      timeInform.textContent = '2 часа ночи  ' + minute + ' минут';
      myImg.src = 'images/night.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 3:
      timeHour.textContent = '3';
      timeInform.textContent = '3 часа ночи  ' + minute + ' минут';
      myImg.src = 'images/night.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 4:
      timeHour.textContent = '4';
      timeInform.textContent = '4 часа ночи  ' + minute + ' минут';
      myImg.src = 'images/night.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 5:
      timeHour.textContent = '5';
      timeInform.textContent = '5 часов ночи  ' + minute + ' минут';
      myImg.src = 'images/night.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 6:
      timeHour.textContent = '6';
      timeInform.textContent = '6 часов ночи  ' + minute + ' минут';
      myImg.src = 'images/night.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 7:
      timeHour.textContent = '7';
      timeInform.textContent = '7 часов утра  ' + minute + ' минут';
      myImg.src = 'images/morning.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 8:
      timeHour.textContent = '8';
      timeInform.textContent = '8 часов утра  ' + minute + ' минут';
      myImg.src = 'images/morning.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 9:
      timeHour.textContent = '9';
      timeInform.textContent = '9 часов утра  ' + minute + ' минут';
      myImg.src = 'images/morning.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 10:
      timeHour.textContent = '10';
      timeInform.textContent = '10 часов утра  ' + minute + ' минут';
      myImg.src = 'images/morning.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 11:
      timeHour.textContent = '11';
      timeInform.textContent = '11 часов дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 12:
      timeHour.textContent = '12';
      timeInform.textContent = '12 часов дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 13:
      timeHour.textContent = '1';
      timeInform.textContent = '1 час дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 14:
      timeHour.textContent = '2';
      timeInform.textContent = '2 часа дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 15:
      timeHour.textContent = '3';
      timeInform.textContent = '3 часа дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 16:
      timeHour.textContent = '4';
      timeInform.textContent = '4 часа дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 17:
      timeHour.textContent = '5';
      timeInform.textContent = '5 часов дня  ' + minute + ' минут';
      myImg.src = 'images/day.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 18:
      timeHour.textContent = '6';
      timeInform.textContent = '6 часов вечера  ' + minute + ' минут';
      myImg.src = 'images/evening.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 19:
      timeHour.textContent = '7';
      timeInform.textContent = '7 часов вечера  ' + minute + ' минут';
      myImg.src = 'images/evening.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 20:
      timeHour.textContent = '8';
      timeInform.textContent = '8 часов вечера  ' + minute + ' минут';
      myImg.src = 'images/evening.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 21:
      timeHour.textContent = '9';
      timeInform.textContent = '9 часов вечера  ' + minute + ' минут';
      myImg.src = 'images/evening.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 22:
      timeHour.textContent = '10';
      timeInform.textContent = '10 часов вечера  ' + minute + ' минут';
      myImg.src = 'images/evening.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;
    case 23:
      timeHour.textContent = '11';
      timeInform.textContent = '11 часов вечера  ' + minute + ' минут';
      myImg.src = 'images/evening.jpg';
      console.log(timeInform.textContent);
      alert(timeInform.textContent);
      break;

    default:
      alert('Error');

      break;
  }
}
