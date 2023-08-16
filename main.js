function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  const number = 5;
  const factorial = factorialIterative(number);
  console.log(`Факториал ${number} равен ${factorial}`);


  let str = "My name 457 is Alex"
  let rex = /\D+/gi;
  let result = str.match(rex)
  console.log(result);



  const text = "Hello\tWorld\nTest";
const whitespaceCharacters = [];

for (let i = 0; i < text.length; i++) {
  if (/\s/.test(text[i])) {
    whitespaceCharacters.push(text[i]);
  }
}

console.log(whitespaceCharacters.join(''));