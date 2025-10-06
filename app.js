<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>150-English-Words-And-Antonyms</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #fbc2eb, #a6c1ee);
    margin: 0;
    padding: 0;
  }

  .header {
    width: 100%;
    height: 200px;
    background: url('https://ibb.co/gLjWmNfB') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;
    font-weight: bold;
    text-shadow: 2px 2px 5px black;
  }

  #word-list {
    list-style: none;
    padding: 20px;
    margin: 0 auto;
    max-width: 800px;
  }

  .word-item {
    margin: 10px 0;
    padding: 15px;
    border-radius: 12px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s ease, transform 0.3s ease;
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    position: relative;
  }

  .word-item.show {
    opacity: 1;
    transform: translateY(0);
  }

  .word-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(255,255,255,0.6), 0 8px 20px rgba(0,0,0,0.3);
  }

  .word-item.active {
    animation: pulse 0.6s ease;
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); opacity: 0.9; }
    100% { transform: scale(1); opacity: 1; }
  }

  .antonyms {
    margin-top: 8px;
    font-style: italic;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transform: translateX(-20px);
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.5s;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(255,255,255,0.5);
  }

  .word-item.show-antonyms .antonyms {
    opacity: 1;
    max-height: 100px;
    transform: translateX(0);
  }

  strong {
    font-size: 1.3em;
  }

  .meaning {
    margin-left: 10px;
    font-size: 1.1em;
  }

  .word-item::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 15px;
    background: linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.0), rgba(255,255,255,0.2));
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  .word-item:hover::after {
    opacity: 1;
    transform: rotate(10deg);
  }

</style>
</head>
<body>

<div class="header">Мой Красочный Словарь</div>

<ul id="word-list"></ul>

<script>
const words = [
{"word":"Alive","meaning":"Живой","antonyms":["Dead","Unconscious"]},
{"word":"Advance","meaning":"Продвигаться","antonyms":["Retreat","Behind"]},
{"word":"Admit","meaning":"Признавать","antonyms":["Deny","Expel"]},
{"word":"Agree","meaning":"Соглашаться","antonyms":["Disagree","Reject"]},
{"word":"Absence","meaning":"Отсутствие","antonyms":["Presence"]},
{"word":"Abundant","meaning":"Изобильный, обильный","antonyms":["Scarce"]},
{"word":"Accurate","meaning":"Точный","antonyms":["Inaccurate"]},
{"word":"Advantage","meaning":"Преимущество","antonyms":["Disadvantage"]},
{"word":"Artificial","meaning":"Искусственный","antonyms":["Natural"]}
];

const colors = [
  'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)'
];

const wordList = document.getElementById('word-list');

words.forEach((w, i) => {
  const li = document.createElement('li');
  li.className = 'word-item';
  li.style.background = colors[i % colors.length];
  li.innerHTML = `<strong>${w.word}</strong> — <span class="meaning">${w.meaning}</span>
                  <div class="antonyms">Антонимы: ${w.antonyms.join(', ')}</div>`;
  
  li.addEventListener('click', () => {
    li.classList.toggle('show-antonyms');
    li.classList.add('active');
    setTimeout(() => li.classList.remove('active'), 600);
  });

  wordList.appendChild(li);

  setTimeout(() => {
    li.classList.add('show');
  }, i * 150);
});
</script>

</body>
</html>
