import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
//const flatpickr = require('flatpickr');
import Notiflix from 'notiflix';

//const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button[type = "button"]');
const daysItem = document.querySelector('span[data-days]');
const hoursItem = document.querySelector('span[data-hours]');
const minutesItem = document.querySelector('span[data-minutes]');
const secondsItem = document.querySelector('span[data-seconds]');
const valueId = document.querySelectorAll('.value');
//console.log(valueId);

let timeLeft;
let choosedDate;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      btnEl.disabled = true;
      //window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
      choosedDate = selectedDates[0].getTime();
      timeLeft = choosedDate - new Date();
      Notiflix.Notify.success('OK');
    }
    //console.log(choosedDate);
    //console.log(timeLeft);
  },
};

flatpickr('#datetime-picker', options);

//funkcja, która zwraca obiekt z obliczonym pozostałym czasem do daty końcowej
//parametr timeLeft to różnica między datą końcową (wybraną) i aktualną datą w milisekundach.
function convertMs(timeLeft) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(timeLeft / day);
  // Remaining hours
  const hours = Math.floor((timeLeft % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((timeLeft % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((timeLeft % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
//valueId.innerHTML = '22';
//console.log(valueId);

function addLeadingZero(value) {
  const formattedValue = value.toString().padStart(2, '0');
  return formattedValue;
}

function getCounter() {
  timerId = setInterval(() => {
    timeLeft = choosedDate - new Date().getTime();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysItem.innerHTML = addLeadingZero(days);
    hoursItem.innerHTML = addLeadingZero(hours);
    minutesItem.innerHTML = addLeadingZero(minutes);
    secondsItem.innerHTML = addLeadingZero(seconds);

    if (timeLeft < 0) {
      clearInterval(timerId);
      daysItem.innerHTML = '00';
      hoursItem.innerHTML = '00';
      minutesItem.innerHTML = '00';
      secondsItem.innerHTML = '00';
    }
  }, 1000);
}
btnEl.addEventListener('click', getCounter);

//console.log(options.defaultDate.getTime());
