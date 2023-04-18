import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
//const flatpickr = require('flatpickr');

//const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button[type = "button"]');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
//btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      btnEl.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
    }
  },
};

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     pickedDate = selectedDates[0].getTime();

//     if (pickedDate < Date.parse(options.defaultDate)) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       btnEl.setAttribute('disabled', '');
//     } else {
//       btnEl.disabled = false;
//     }
//   },
// };

//function addLeadingZero(value) { }

//funkcja, która zwraca obiekt z obliczonym pozostałym czasem do daty końcowej
//parametr ms to różnica między końcową (wybraną) i aktualną datą w milisekundach.
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr('input#datetime-picker', options);
//flatpickr(inputEl, options);
//function getCounter();

//btnEl.addEventListener('clikc', getCounter);
