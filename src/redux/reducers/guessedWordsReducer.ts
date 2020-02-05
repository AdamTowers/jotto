import { actionTypes } from "../actions";

export interface GuessedWordShape {
  guessedWord: string;
  letterMatchCount: number;
}

/**
 * @function guessedWordsReducer
 * @param {array} state – Array of guessed words.
 * @param {object} action – Action to be reduced.
 * @returns {array} – New guessedWords state.
 */
export default (state = [], action: any) => {
  // TODO: Type redux action
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
