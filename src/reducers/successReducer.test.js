import success from './successReducer';
import { actionTypes } from '../actions';

test('returns default initial state of "false" when no action is passed', () => {
  const state = success(undefined, {});

  expect(state).toBe(false);
});

test('returns state of "true" upon receiving an action of type "CORRECT_GUESS"', () => {
  const state = success(undefined, {
    type: actionTypes.CORRECT_GUESS
  });

  expect(state).toBe(true);
});
