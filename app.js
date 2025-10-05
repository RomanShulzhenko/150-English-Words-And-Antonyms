<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Интерактивный словарь слов</title>
<style>
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #c0e0ff, #ffffff);
    padding: 20px;
    color: #333;
  }
  h1 {
    text-align: center;
    color: #004080;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px #aaa;
  }
  #word-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
    list-style: none;
    padding: 0;
  }
  .word-item {
    background: #ffffff;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
    position: relative;
  }
  .word-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    background: #e0f0ff;
  }
  .word {
    font-weight: bold;
    font-size: 18px;
    color: #004080;
  }
  .meaning {
    display: block;
    margin-top: 5px;
    color: #555;
  }
  .antonyms {
    margin-top: 10px;
    padding: 8px;
    border-radius: 8px;
    background-color: #ffe0e0;
    color: #c00000;
    font-weight: bold;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.4s, transform 0.4s;
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
  }
  .antonyms.show {
    opacity: 1;
    transform: translateY(0);
  }
</style>
</head>
<body>

<h1>Интерактивный словарь слов с антонимами</h1>
<ul id="word-list"></ul>

<script>
const words = [
  { word: "Alive", meaning: "Живой", antonyms: ["Dead", "Unconscious"]},
  { word: "Advance", meaning: "Продвигаться", antonyms: ["Retreat", "Behind"]},
  { word: "Admit", meaning: "Признавать", antonyms: ["Deny", "Expel"]},
  { word: "Agree", meaning: "Соглашаться", antonyms: ["Disagree", "Reject"]},
  { word: "Absence", meaning: "Отсутствие", antonyms: ["Presence"]},
  { word: "Abundant", meaning: "Изобильный", antonyms: ["Scarce"]},
  { word: "Accurate", meaning: "Точный", antonyms: ["Inaccurate"]},
  { word: "Artificial", meaning: "Искусственный", antonyms: ["Natural"]},
  { word: "Attack", meaning: "Атака", antonyms: ["Defense"]},
  { word: "Accept", meaning: "Принимать", antonyms: ["Reject"]},
  { word: "Ascend", meaning: "Подниматься", antonyms: ["Descend"]},
  { word: "Attention", meaning: "Внимание", antonyms: ["Neglect"]},
  { word: "Bravery", meaning: "Храбрость", antonyms: ["Cowardice"]},
  { word: "Calm", meaning: "Спокойный", antonyms: ["Agitated"]},
  { word: "Clever", meaning: "Умный", antonyms: ["Foolish"]},
  { word: "Dark", meaning: "Тёмный", antonyms: ["Light"]},
  { word: "Expensive", meaning: "Дорогой", antonyms: ["Cheap"]},
  { word: "Fail", meaning: "Потерпеть неудачу", antonyms: ["Succeed"]},
  { word: "Generous", meaning: "Щедрый", antonyms: ["Stingy"]},
  { word: "Hot", meaning: "Горячий", antonyms: ["Cold"]},
  { word: "Important", meaning: "Важный", antonyms: ["Unimportant"]},
  { word: "Joyful", meaning: "Радостный", antonyms: ["Sad"]},
  { word: "Kind", meaning: "Добрый", antonyms: ["Cruel"]},
  { word: "Love", meaning: "Любовь", antonyms: ["Hate"]},
  { word: "Peaceful", meaning: "Мирный", antonyms: ["Violent"]},
  { word: "Quick", meaning: "Быстрый", antonyms: ["Slow"]},
  { word: "Safe", meaning: "Безопасный", antonyms: ["Dangerous"]},
  { word: "Strong", meaning: "Сильный", antonyms: ["Weak"]},
  { word: "Ugly", meaning: "Уродливый", antonyms: ["Beautiful"]},
  { word: "Young", meaning: "Молодой", antonyms: ["Old"]}
];

const wordList = document.getElementById('word-list');

function displayWords(list) {
  wordList.innerHTML = '';
  list.forEach(w => {
    const li = document.createElement('li');
    li.className = 'word-item';
    li.innerHTML = `
      <span class="word">${w.word}</span>
      <span class="meaning">${w.meaning}</span>
      <div class="antonyms">Антонимы: ${w.antonyms.join(', ')}</div>
    `;

    const antonymsDiv = li.querySelector('.antonyms');

    // Изначально скрываем антонимы
    antonymsDiv.classList.remove('show');

    li.addEventListener('click', () => {
      antonymsDiv.classList.toggle('show');
    });

    wordList.appendChild(li);
  });
}

// Показываем все слова
displayWords(words);
</script>

</body>
</html>
