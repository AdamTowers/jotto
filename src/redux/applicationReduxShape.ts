import { GuessedWordShape } from "./reducers/guessedWordsReducer";

export interface ApplicationReduxShape {
  success: boolean;
  guessedWords: GuessedWordShape[];
  secretWord: string;
}
