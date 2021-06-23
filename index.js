const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
      startBtn: document.querySelector('button[data-action="start"]'),
      stopBtn: document.querySelector('button[data-action="stop"]'),
      body: document.querySelector('body'),
  }

 
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let index = randomIntegerFromInterval(0, colors.length - 1);

// function switchColor() {
//     refs.body.style.backgroundColor = colors[index];
// }
let intervalId = undefined;

refs.startBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
})

