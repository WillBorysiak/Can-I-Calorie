import { createReducer, on } from '@ngrx/store';
import { generateBreakfast } from './app.actions';

export const initialState = 0;

export const mealReducer = createReducer(
  initialState,
  on(generateBreakfast, (state, props) => props.value!)
);
