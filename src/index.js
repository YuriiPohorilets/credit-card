const refs = {
  card: document.querySelector('.card'),
  system: document.querySelector('.card__system'),
  number: document.querySelector('.card__number'),
  holder: document.querySelector('.card__holder'),
  month: document.querySelector('.card__month'),
  year: document.querySelector('.card__year'),
  form: document.querySelector('.form'),
};

console.log(refs.card);
refs.form.addEventListener('input', onFormChange);
// refs.form.addEventListener('focus', onFormFocus);

// function onFormFocus(e) {
//   const dataSetNameRefs = Object.values(refs);
//   dataSetNameRefs.filter(item => {
//     item.classList.remove('on-focus');
//     if (item.dataset.name === e.target.id) {
//       item.focus();
//       item.classList.add('on-focus');
//     }
//   });
// }

function onFormChange(e) {
  console.log(e);
  const dataSetNameRefs = Object.values(refs);
  const targetValue = e.target.value;
  const trimValueOutput = trimValue(targetValue);

  dataSetNameRefs.filter(item => {
    item.classList.remove('on-focus');
    if (item.dataset.name === e.target.id) {
      if (e.target.id === 'card-number') {
        item.classList.add('on-focus');

        return (item.textContent = trimValueOutput);
      }
      item.classList.add('on-focus');

      return (item.textContent = targetValue.toUpperCase());
    }
  });
}

function trimValue(value) {
  return [...value]
    .map((d, i) => (i % 4 === 0 ? ' ' + d : d))
    .join('')
    .trim();
}
