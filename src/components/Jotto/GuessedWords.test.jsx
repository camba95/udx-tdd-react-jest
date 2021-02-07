import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there is no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const component = findByTestAttr(wrapper, 'guess-instructions');

    expect(component.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5
    }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  test('renders "guessed words" serction', () => {
    const component = findByTestAttr(wrapper, 'guessed-words');

    expect(component.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const nodes = findByTestAttr(wrapper, 'guessed-word');

    expect(nodes.length).toBe(guessedWords.length);
  });
});
