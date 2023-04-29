import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const firstDelay = parseInt(formData.get('delay'));
  const delayStep = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));

  // const delayEl = document.querySelector('input[name="delay"]');
  // const stepEl = document.querySelector('input[name="step"]');
  // const amountEl = document.queryselector('input[name="amount"]');

  // const firstDelay = parseInt(delayEl.value);
  // const delayStep = parseInt(stepEl.value);
  // const amount = parseInt(amountEl.value);

  for (let i = 0; i < amount; i++)
    createPromise(i + 1, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
