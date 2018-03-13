import { SUBMIT_GUESS } from '../actions/guess';

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBMIT_GUESS :
    return state.concat(payload)

    default:

    return state
  }
}
