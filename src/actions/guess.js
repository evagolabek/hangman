export const SUBMIT_GUESS = 'SUBMIT_GUESS'

export const submitGuess = (guess) => {
  return {
    type: SUBMIT_GUESS,
    payload: guess
  }
}
