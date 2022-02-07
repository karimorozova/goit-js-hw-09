import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



  const formDataRefs = document.querySelector('.form');

const { elements: { delay, step, amount} } = formDataRefs;


formDataRefs.addEventListener('submit', onFormSubmit)


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 
  return new Promise((res, rej) => {
    if (shouldResolve) {
      
      setTimeout(() => {res({ position, delay });}, delay)
      
      } else {
        
        setTimeout(() => {rej({ position, delay });}, delay)
        
      }
  })
}

function onFormSubmit(e) {

  e.preventDefault();

  let promisePosition = 0;
  let promiseDelay = Number(delay.value) - Number(step.value);


  for (let i = 0; i < amount.value; i += 1) {
    
    promisePosition += 1;
    promiseDelay += Number(step.value);
    createPromise(promisePosition, promiseDelay)
      .then(({ position, delay }) => {
        
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        
      })
      .catch(({ position, delay }) => {
        
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        
      });
    
  }

}