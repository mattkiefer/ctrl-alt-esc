// generated from perplexity
document.addEventListener('DOMContentLoaded', () => {
  const lines = [
    'KNIGHT LAB',
    'blackboard.txt',
    'line 2026'
  ];

  const fullText = lines.join('\n'); // separate lines
  const target = document.body;
  const charDelay = 150;   // slower reveal (ms per char)
  const holdDelay = 3000;  // leave full text up (ms)
  let index = 0;

  function typeNextChar() {
    if (index < fullText.length) {
      target.textContent += fullText.charAt(index);
      index += 1;
      setTimeout(typeNextChar, charDelay);
    } else {
      // finished typing, hold, then clear and restart
      setTimeout(() => {
        target.textContent = '';
        index = 0;
        typeNextChar();
      }, holdDelay);
    }
  }

  typeNextChar();
});

