import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
}

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
