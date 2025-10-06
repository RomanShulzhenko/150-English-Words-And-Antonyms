const words = [
  {"word":"Alive","meaning":"Живой","antonyms":["Dead","Unconscious"]},
  {"word":"Advance","meaning":"Продвигаться","antonyms":["Retreat","Behind"]},
  {"word":"Admit","meaning":"Признавать","antonyms":["Deny","Expel"]},
  {"word":"Agree","meaning":"Соглашаться","antonyms":["Disagree","Reject"]},
  {"word":"Absence","meaning":"Отсутствие","antonyms":["Presence"]},
  {"word":"Abundant","meaning":"Изобильный, обильный","antonyms":["Scarce"]}
];

const wordList = document.getElementById('word-list');

words.forEach((w, i) => {
  const li = document.createElement('li');
  li.className = 'word-item';
  li.innerHTML = `<strong>${w.word}</strong> — <span class="meaning">${w.meaning}</span>
                  <div class="antonyms">Антонимы: ${w.antonyms.join(', ')}</div>`;
  
  li.addEventListener('click', () => {
    li.classList.toggle('show-antonyms');
    li.classList.add('active');
    setTimeout(() => li.classList.remove('active'), 600);
  });

  wordList.appendChild(li);

  // Анимация появления слов
  setTimeout(() => { li.classList.add('show'); }, i * 150);
});
