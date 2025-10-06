const words = [
  {"word":"Alive","meaning":"Живой","antonyms":["Dead","Unconscious"]},
  {"word":"Advance","meaning":"Продвигаться","antonyms":["Retreat","Behind"]},
  {"word":"Admit","meaning":"Признавать","antonyms":["Deny","Expel"]},
  {"word":"Agree","meaning":"Соглашаться","antonyms":["Disagree","Reject"]}
];

const wordList = document.getElementById('word-list');

words.forEach((w, i) => {
  const li = document.createElement('li');
  li.className = 'word-item';
  li.innerHTML = `<strong>${w.word}</strong> — <span class="meaning">${w.meaning}</span>
                  <div class="antonyms">Антонимы: ${w.antonyms.join(', ')}</div>`;

  li.addEventListener('click', () => {
    li.classList.toggle('show-antonyms');
  });

  wordList.appendChild(li);

  setTimeout(() => { li.classList.add('show'); }, i * 150);
});
