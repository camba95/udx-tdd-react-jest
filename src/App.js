import React from 'react';
import hookActions from './actions/hookActions';
import Input from './Input';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
}

function App() {
  const initialState = { secretWord: null };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord) => dispatch({
    type: "setSecretWord",
    payload: secretWord
  });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
  )
}

export default App;
