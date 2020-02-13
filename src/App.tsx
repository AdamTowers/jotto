import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";
import Input from "./components/Input";
import { getSecretWord } from "./redux/actions";
import { ApplicationReduxShape } from "./redux/applicationReduxShape";
import { GuessedWordShape } from "./redux/reducers/guessedWordsReducer";

// Redux provided props via mapDispatchToProps
interface AppDispatchProps {
  getSecretWord: () => any; // TODO: Type thunk dispatch
}

// Redux provided props via mapStateToProps
interface AppStateProps {
  success: boolean;
  guessedWords: GuessedWordShape[];
  secretWord: string;
}

// Merged props of the above interfaces
type AppProps = AppDispatchProps & AppStateProps;

export class AppBase extends Component<AppProps> {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return { getSecretWord };
};

const mapStateToProps = (state: ApplicationReduxShape): AppStateProps => {
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBase);
