const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

let index = 0;

document.addEventListener('keydown', e => {
  const key = parseInt(e.detail || e.which);
  let correctKey = code[index];
  if (key === correctKey) {
    index++;
    if (index === code.length) {
      alert("Congrats! Cheat unlocked");
      index = 0;
    }
  } else {
    index = 0;
    alert("Oops! keep trying");
  }
})
}

document.addEventListener('DOMContentLoaded', function() {
  init();
})