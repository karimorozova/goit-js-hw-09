import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

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
    console.log(selectedDates, 22);
      console.log(selectedDates[0], 22);

      if(selectedDates[0] <= options.defaultDate) {
        alert('Please choose a date in the future');
        return;
      }
      
        refs.timerStartBtn.removeAttribute('disabled');
        // const difference = selectedDates[0] - Date.now();
        //     const time = convertMs(difference);
        //     updateTimerInterface(time);
        let intervalId = null;
       
        refs.timerStartBtn.addEventListener('click', () => {
            console.log(9);
            intervalId = setInterval(() => {
             const difference = selectedDates[0] - Date.now();
            
            console.log(difference <= 0)
            if(difference <= 0) {
                updateTimerInterface();
                console.log(8)
                clearInterval(intervalId);
                
                return;
            }
            const time = convertMs(difference);
            updateTimerInterface(time);
            // clearInterval(intervalId);
        //     console.log(difference);
        //     console.log(selectedDates[0]);
        // console.log(Date.now());

        // if(difference <= 0) {
        //     updateTimerInterface();
        //     clearInterval(intervalId);
            
        //     return;
        // }
            
          }, 1000)
          
        });
       
  },
}

// refs.timerStartBtn.addEventListener('click', options.onClick.bind(options));
// console.log(options);




flatpickr("#datetime-picker", options);
// console.log(flatpickr)




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
  
function updateTimerInterface({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
    refs.timerDaysValue.textContent = days;
    refs.timerHoursValue.textContent = hours;
    refs.timerMinutesValue.textContent = minutes;
    refs.timerSecondsValue.textContent = seconds;
};

