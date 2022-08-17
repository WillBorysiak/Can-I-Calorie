import { createReducer, on } from '@ngrx/store';
import { generateBmr } from './bmr.actions';

export const initialState = 0;

export const bmrReducer = createReducer(
  initialState,
  on(generateBmr, (state, props) => props.value)
);
