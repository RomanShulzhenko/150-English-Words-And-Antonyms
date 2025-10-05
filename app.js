<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Словарь слов</title>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .word-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
  }
  .antonyms {
    margin-top: 5px;
    color: red;
    display: none;
  }
</style>
</head>
<body>

<h1>Словарь слов с антонимами</h1>
<ul id="word-list"></ul>

<script>
const words = [
  { word: "Alive", meaning: "Живой", antonyms: ["Dead", "Unconscious"]},
  { word: "Advance", meaning: "Продвигаться", antonyms: ["Retreat", "Behind"]},
  { word: "Admit", meaning: "Признавать", antonyms: ["Deny", "Expel"]},
  { word: "Agree", meaning: "Соглашаться", antonyms: ["Disagree", "Reject"]}
];

const wordList = document.getElementById('word-list');

words.forEach(w => {
  const li = document.createElement('li');
  li.className = 'word-item';
  li.innerHTML = `<strong>${w.word}</strong> — ${w.meaning}
                  <div class="antonyms">Антонимы: ${w.antonyms.join(', ')}</div>`;
  
  const antonymsDiv = li.querySelector('.antonyms');
  
  li.addEventListener('click', () => {
    antonymsDiv.style.display = antonymsDiv.style.display === 'block' ? 'none' : 'block';
  });
  
  wordList.appendChild(li);
});
</script>

</body>
</html>
