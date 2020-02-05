import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../redux/actions";
import { ApplicationReduxShape } from "../redux/applicationReduxShape";

// Redux provided props via mapDispatchToProps
interface InputDispatchProps {
  guessWord: (guessedWord: string) => any; // TODO: Type thunk dispatch
}

// Redux provided props via mapStateToProps
interface InputStateProps {
  success: boolean;
}

// Merged props of the above interfaces
type InputProps = InputDispatchProps & InputStateProps;

interface InputState {
  currentGuess: string;
}

export class InputBase extends Component<InputProps, InputState> {
  state = {
    currentGuess: ""
  };

  submitGuessedWord(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }

    this.setState({ currentGuess: "" });
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            this.setState({ currentGuess: event.target.value })
          }
          placeholder="Enter guess"
        />
        <button
          data-test="submit-button"
          className="mb-2 mx-sm-3"
          type="submit"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            this.submitGuessedWord(event)
          }
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = (state: ApplicationReduxShape): InputStateProps => {
  return { success: state.success };
};

export default connect(mapStateToProps, { guessWord })(InputBase);
