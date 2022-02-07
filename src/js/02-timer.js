import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    dateTimePicker: document.querySelector('#datetime-picker'),
    timerStartBtn: document.querySelector('[data-start]'),
    timerDaysValue: document.querySelector('[data-days]'),
    timerHoursValue: document.querySelector('[data-hours]'),
    timerMinutesValue: document.querySelector('[data-minutes]'),
    timerSecondsValue: document.querySelector('[data-seconds]'),
    
};


refs.timerStartBtn.disabled = 'true';





const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      if(selectedDates[0] <= options.defaultDate) {
          
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      }
      
        refs.timerStartBtn.removeAttribute('disabled');
        let intervalId = null;
       
        refs.timerStartBtn.addEventListener('click', () => {
            
            intervalId = setInterval(() => {

             const difference = selectedDates[0] - Date.now();
            
            if(difference <= 0) {
                clearInterval(intervalId);
                return;
            }
            const time = convertMs(difference);
            updateTimerInterface(time);
            
          }, 1000)
          
        });
       
  },
}

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
  
function updateTimerInterface({ days, hours, minutes, seconds }) {
    refs.timerDaysValue.textContent = addLeadingZero(days);
    refs.timerHoursValue.textContent = addLeadingZero(hours);
    refs.timerMinutesValue.textContent = addLeadingZero(minutes);
    refs.timerSecondsValue.textContent = addLeadingZero(seconds);
};

function addLeadingZero(value) {
   return  String(value).padStart(2, "0");
}

