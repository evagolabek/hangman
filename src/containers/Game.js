import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InputForm from '../components/InputForm'
import {wrongGuessCount, showGuess, isWinner} from '../lib/game'

const wordToGuess = "hello"


export class Game extends PureComponent {
  static propTypes = {
    //my array of guessed letters, guesses is an array of strings
    guesses: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    //we get guesses from the props
    const {guesses} = this.props

    if (isWinner(wordToGuess, guesses)) {
      return (
        <h2> YOU WON ! </h2>
      )
    }

    if (wrongGuessCount(wordToGuess, guesses)>5) {
      return (
        <div>
          <h2> YOU LOST ! </h2>
          <p> The word was {wordToGuess} </p>
        </div>
      )
    }

    return (
      <div>
        <h2>{showGuess(wordToGuess, guesses)}</h2>
        <br/>
        Already_guessed: {guesses}
        <InputForm />
      </div>
    )
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(Game)
