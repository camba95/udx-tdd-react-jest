import React from 'react';
import { shallow } from 'enzyme';
import Input, { Input as UnconnectedInput } from './Input';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');

      expect(component.length).toBe(1);
    });

    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');

      expect(component.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');

      expect(component.length).toBe(0);
    });

    test('does not render submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');

      expect(component.length).toBe(0);
    });

  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const { success: successProp } = wrapper.instance().props;

    expect(successProp).toBe(success);
  });

  test('guessWord action creator is a function prop', () => {
    const wrapper = setup();
    const { guessWord: guessWordProp } = wrapper.instance().props;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('guessWord action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
      success: false
    };
    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.setState({ currentGuess: guessedWord });
    const button = findByTestAttr(wrapper, 'submit-button');
    button.simulate('click', { preventDefault() { } });
  });

  test('calls guessWord when button is clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;

    expect(guessWordCallCount).toBe(1)
  });

  test('calls guessWord with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];

    expect(guessWordArg).toBe(guessedWord)
  });

  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  });
});
