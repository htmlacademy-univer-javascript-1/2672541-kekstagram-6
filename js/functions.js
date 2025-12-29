// Функция для проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Функция для проверки палиндрома
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

// Функция извлечения чисел
const extractNumber = (arg) => {
  const string = arg.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
};

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

extractNumber('2023 год');            // 2023
extractNumber('ECMAScript 2022');     // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007');           // 7
extractNumber('а я томат');           // NaN

extractNumber(2023); // 2023
extractNumber(-1);   // 1
extractNumber(1.5);  // 15
