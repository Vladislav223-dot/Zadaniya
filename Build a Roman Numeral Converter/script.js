document.getElementById('convert-btn').addEventListener('click', function() {
  var numberInput = document.getElementById('number').value;
  var outputDiv = document.getElementById('output');

  // Преобразование введенного значения в число
  var number = parseInt(numberInput);

  // Проверка на пустой ввод
  if (!numberInput) {
    outputDiv.textContent = "Please enter a valid number";
    return;
  }

  // Проверка, если введенное число меньше 1
  if (number === -1) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  // Проверка, если введенное число больше или равно 4000
  if (number >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  // Определение символов римских цифр и их соответствующих значений
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Инициализация строки для результата
  var result = '';

  // Преобразование числа в римские цифры
  for (var i = 0; i < romanNumerals.length; i++) {
    while (number >= arabicValues[i]) {
      result += romanNumerals[i];
      number -= arabicValues[i];
    }
  }

  // Вывод результата
  outputDiv.textContent = result;
});
