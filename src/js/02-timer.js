import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const FUTURE_DAY_STORAGE_KEY = 'futureDay';

const refs = {
    dateTimePicker: document.querySelector('#datetime-picker'),
    timerStartBtn: document.querySelector('[data-start]'),
    timerValue: document.querySelector('.value'),
    timerLabel: document.querySelector('.label'),
    
};

refs.timerStartBtn.disabled = 'true';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      console.log(selectedDates[0].getTime());
      if(selectedDates[0].getTime() > options.defaultDate) {
        refs.timerStartBtn.removeAttribute('disabled');
          
          const difference = selectedDates[0].getTime() - options.defaultDate;
          console.log(difference);
          return;
      }
      alert('Please choose a date in the future')
     
    },
  };

//   options.onClose(['15', '78']);

// console.log(options.defaultDate);



// const select = options.onClose.bind(options);
// console.log(select());

flatpickr("#datetime-picker", options);


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}