export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretSet = new Set(secretWord);
  const guessedSet = new Set(guessedWord);
  return [...secretSet].filter((letter) => guessedSet.has(letter)).length;
};
