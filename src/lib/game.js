export function wrongGuessCount(word, guesses) {
  let sum = 0;
  guesses.forEach(function(guess) {
    if (word.indexOf(guess) === -1) sum+=1
  });
  return sum
}

export function showGuess(word, guesses) {
  return word.split('').map(letter => guesses.includes(letter) ? letter : '_' ).join(' ')
}

export function isWinner(word, guesses) {
  return word.split('').join(' ') === showGuess(word, guesses)
}
