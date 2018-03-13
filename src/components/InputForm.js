import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitGuess } from '../actions/guess'

export class InputForm extends PureComponent {
  static propTypes = {
    submitGuess: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    const guess = event.target.value
    this.props.submitGuess(guess)
    event.target.value = ""
  }

	render() {
		return (
      <div>
        Guess:
        <input onChange={this.handleChange} />
      </div>
		)
	}
}

export default connect(null, {submitGuess})(InputForm)
