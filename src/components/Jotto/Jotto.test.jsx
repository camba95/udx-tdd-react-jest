import React from 'react';
import { shallow } from 'enzyme';
import Jotto, { Jotto as UnconnectedJotto } from './Jotto';
import { storeFactory, findByTestAttr } from '../../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Jotto store={store} />).dive().dive();
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-jotto');

  expect(component.length).toBe(1);
});

describe('redux props', () => {
  test('has success state as prop', () => {
    const success = false;
    const wrapper = setup({ success });
    const { success: successProp } = wrapper.instance().props;

    expect(successProp).toBe(success);
  });

  test('has secretWord state as prop', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const { secretWord: secretWordProp } = wrapper.instance().props;

    expect(secretWordProp).toBe(secretWord);
  });

  test('has guessedWords state as prop', () => {
    const guessedWords = [{
      guessedWord: 'train',
      letterMatchCount: 3
    }];
    const wrapper = setup({ guessedWords });
    const { guessedWords: guessedWordsProp } = wrapper.instance().props;

    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test('getSecretWord action creator is a function prop', () => {
    const wrapper = setup();
    const { getSecretWord: getSecretWordProp } = wrapper.instance().props;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('getSecretWord runs on Jotto mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };
  const wrapper = shallow(<UnconnectedJotto {...props} />);
  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
