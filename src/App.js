import React from 'react';
import hookActions from './actions/hookActions';
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
  return (
    <div data-test="component-app">

    </div>
  )
}

export default App;
