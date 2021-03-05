import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils'
import App from './App';
import hookActions from './actions/hookactions';

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
}

test('App renders without erros', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
