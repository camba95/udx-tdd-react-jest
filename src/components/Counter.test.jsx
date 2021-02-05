import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<Counter />);
  const counterComponent = wrapper.find('[data-test="component-counter"]');
  expect(counterComponent.length).toBe(1);
});

test('renders a button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking on button increments counter display', () => {

});
