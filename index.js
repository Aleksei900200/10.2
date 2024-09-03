document.querySelector('button').onclick = function () {
  const generalWidth = window.screen.width;
  const generalHeight = window.screen.height;
  
  alert(
    `размеры экрана - ширина: ${generalWidth}px, высота: ${generalHeight}px`
  );
};
