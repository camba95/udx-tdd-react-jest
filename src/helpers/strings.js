const languageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
    congrats: '🎯🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessColumnHeader: '🤷‍',
    guessedWords: '🤷‍🔤',
    matchingLettersColumnHeader: '✅',
  }
}

const getStringByLanguage = (languageCode, stringKey, strings = languageStrings) => {
  if (strings[languageCode] && strings[languageCode][stringKey]) {
    return strings[languageCode][stringKey];
  }
  console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)
  return strings.en[stringKey];
}

export default {
  getStringByLanguage
}
