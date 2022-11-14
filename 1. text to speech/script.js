// захватим UI-элементы для работы с ними
const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');

// перехватим клик по кнопке
speakEl.addEventListener('click', speakText);

function speakText() {
  // остановим все, что уже синтезируется в речь
  window.speechSynthesis.cancel();

  // прочитать текст
  const text = textEl.value;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}