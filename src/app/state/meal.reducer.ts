import { createReducer, on } from '@ngrx/store';
import {
  generateBreakfast,
  generateLunch,
  generateDinner,
  generateSnack,
} from './app.actions';

export const initialState = 0;

export const breakfastReducer = createReducer(
  initialState,
  on(generateBreakfast, (state, props) => props.value!)
);

export const lunchReducer = createReducer(
  initialState,
  on(generateLunch, (state, props) => props.value!)
);

export const dinnerReducer = createReducer(
  initialState,
  on(generateDinner, (state, props) => props.value!)
);

export const snackReducer = createReducer(
  initialState,
  on(generateSnack, (state, props) => props.value!)
);
