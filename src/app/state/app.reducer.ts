import { createReducer, on } from '@ngrx/store';
import { StoreInterface } from '../models/store.model';
import {
  generateBmr,
  generateBreakfast,
  generateLunch,
  generateDinner,
  generateSnack,
  generateWorkout,
} from './app.actions';

export const initialStoreState: StoreInterface = {
  bmr: 0,
  breakfast: 0,
  lunch: 0,
  dinner: 0,
  snack: 0,
  workout: 0,
};

export const appReducer = createReducer(
  initialStoreState,
  on(generateBmr, (state, props) => {
    return { ...state, bmr: props.value };
  }),
  on(generateBreakfast, (state, props) => {
    return { ...state, breakfast: props.value! };
  }),
  on(generateLunch, (state, props) => {
    return { ...state, lunch: props.value! };
  }),
  on(generateDinner, (state, props) => {
    return { ...state, dinner: props.value! };
  }),
  on(generateSnack, (state, props) => {
    return { ...state, snack: props.value! };
  }),
  on(generateWorkout, (state, props) => {
    return { ...state, workout: props.value! };
  })
);

export const getBmr = (state: StoreInterface) => state.bmr;
export const getWorkout = (state: StoreInterface) => state.workout;
export const getBreakfast = (state: StoreInterface) => state.breakfast;
export const getLunch = (state: StoreInterface) => state.lunch;
export const getDinner = (state: StoreInterface) => state.dinner;
export const getSnack = (state: StoreInterface) => state.snack;
