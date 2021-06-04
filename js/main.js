// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
