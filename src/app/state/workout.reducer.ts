import { createReducer, on } from '@ngrx/store';
import { generateWorkout } from './app.actions';

export const initialState = 0;

export const workoutReducer = createReducer(
  initialState,
  on(generateWorkout, (state, props) => props.value!)
);
