<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Яркий анимированный словарь</title>
<style>
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f6d365, #fda085);
    margin: 0;
    padding: 0;
  }

  header {
    width: 100%;
    height: 200px;
    background: url('https://github.com/RomanShulzhenko/150-English-Words-And-Antonyms/blob/main/%D1%88%D0%B0%D0%BF%D0%BA%D0%B0%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.jpg?raw=true') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px #000;
  }

  header h1 {
    color: #fff;
    font-size: 3em;
  }

  ul {
    list-style: none;
    padding: 0;
    max-width: 900px;
    margin: 20px auto;
  }

  .word-item {
    background: #fff;
    margin: 10px 0;
    padding: 18px 25px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-size: 1.2em;
    transform: translateY(50px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease, background 0.3s, color 0.3s;
  }

  .word-item.show {
    transform: translateY(0);
    opacity: 1;
  }

  .word-item:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease;
  }

  .meaning {
    font-style: italic;
    color: #0984e3;
  }

  .antonyms {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(90deg, #fd79a8, #e84393);
    color: #fff;
    padding: 12px;
    border-radius: 0 0 20px 20px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    pointer-events: none;
  }

  .antonyms.show {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    animation: pulse 1.2s infinite alternate;
  }

  @keyframes pulse {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-2px) scale(1.02); }
    100% { transform: translateY(0) scale(1); }
  }
</style>
</head>
<body>

<header>
  <h1>Яркий словарь</h1>
</header>

<ul id="word-list"></ul>

<script>
const words = [
  { word: "Alive", meaning: "Живой", antonyms: ["Dead", "Unconscious"]},
  { word: "Advance", meaning: "Продвигаться", antonyms: ["Retreat", "Behind"]},
  { word: "Admit", meaning: "Признавать", antonyms: ["Deny", "Expel"]},
  { word: "Agree", meaning: "Соглашаться", antonyms: ["Disagree", "Reject"]},
  { word: "Absence", meaning: "Отсутствие", antonyms: ["Presence"]},
  { word: "Beautiful", meaning: "Красивый", antonyms: ["Ugly"]},
  { word: "Bravery", meaning: "Храбрость", antonyms: ["Cowardice"]},
  { word: "Calm", meaning: "Спокойный", antonyms: ["Agitated"]},
  { word: "Clever", meaning: "Умный", antonyms: ["Foolish"]},
  { word: "Dangerous", meaning: "Опасный", antonyms: ["Safe"]}
];

const wordList = document.getElementById('word-list');
const colors = ['#ff7675','#74b9ff','#55efc4','#ffeaa7','#fd79a8','#a29bfe','#fab1a0'];

function displayWords(list) {
  list.forEach((w, index) => {
    const li = document.createElement('li');
    li.className = 'word-item';
    li.innerHTML = `<strong>${w.word}</strong> — <span class="meaning">${w.meaning}</span>
                    <div class="antonyms">Антонимы: ${w.antonyms.join(', ')}</div>`;
    
    const antonymsDiv = li.querySelector('.antonyms');
    
    li.addEventListener('click', () => {
      antonymsDiv.classList.toggle('show');
      li.style.background = antonymsDiv.classList.contains('show') ? colors[index % colors.length] : '#fff';
      li.style.color = antonymsDiv.classList.contains('show') ? '#fff' : '#000';
    });
    
    wordList.appendChild(li);

    setTimeout(() => li.classList.add('show'), index * 150);
  });
}

displayWords(words);
</script>

</body>
</html>

