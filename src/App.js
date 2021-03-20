import React from 'react';
import hookActions from './actions/hookActions';
import Input from './Input';
import LanguagePicker from './LanguagePicker';
import languageContext from './contexts/languageContext'
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

function App() {
  const initialState = { secretWord: null, language: 'en' };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord) => dispatch({
    type: "setSecretWord",
    payload: secretWord
  });

  const setLanguage = (language) => dispatch({
    type: "setLanguage",
    payload: language
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
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  )
}

export default App;
