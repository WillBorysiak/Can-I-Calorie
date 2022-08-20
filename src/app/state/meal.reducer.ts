import { createReducer, on } from '@ngrx/store';
import { generateBreakfast, generateLunch } from './app.actions';
import { MealReducerInterface } from './mealReducer.model';

export const initialState: MealReducerInterface = {
  breakfast: 0,
  lunch: 0,
};

export const breakfastReducer = createReducer(
  initialState,
  on(generateBreakfast, (state, props) => ({
    ...state,
    breakfast: props.value,
  }))
);

export const lunchReducer = createReducer(
  initialState,
  on(generateLunch, (state, props) => ({ ...state, lunch: props.value }))
);
