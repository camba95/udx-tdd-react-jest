import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import { findByTestAttr } from '../../../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the Counter component 
 */
const setup = () => shallow(<Counter />);

test('renders without error', () => {
  const wrapper = setup();
  const counterComponent = findByTestAttr(wrapper, 'component-counter');

  expect(counterComponent.length).toBe(1);
});

test('renders a button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();

  expect(count).toBe('0');
});

test('clicking on primary button increments counter display', () => {
  const wrapper = setup();
  let button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  const count = findByTestAttr(wrapper, 'count').text();

  expect(count).toBe('1');
});

test('clicking on secondary button decreases counter display', () => {
  const wrapper = setup();
  findByTestAttr(wrapper, 'increment-button').simulate('click');
  findByTestAttr(wrapper, 'increment-button').simulate('click');

  const decreaseButton = findByTestAttr(wrapper, 'decrease-button');
  decreaseButton.simulate('click');

  const count = findByTestAttr(wrapper, 'count').text();

  expect(count).toBe('1');
});
