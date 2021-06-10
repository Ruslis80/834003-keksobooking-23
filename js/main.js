// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(min, max){
  if (min < 0) {
    return;
  }
  if (max < min) {
    max = min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomInt(min, max,) {
  if (min < 0) {
    return;
  }
  if (max < min) {
    max = min;
  }
  //return Math.fround()(Math.random() * max);
  return ((Math.random() * (max - min + 1)) + min).toFixed(fValue)
}
