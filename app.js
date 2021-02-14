console.log('hello');

var convertToRoman = function (num) {
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  var romanized = '';

  for (var index = 0; index < arabic.length; index++) {
    while (arabic[index] <= num) {
      romanized += roman[index];
      num -= arabic[index];
    }
  }

  return romanized;
};

console.log(convertToRoman(361));
