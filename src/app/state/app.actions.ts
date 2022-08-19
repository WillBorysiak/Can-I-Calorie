import { createAction, props } from '@ngrx/store';

// BMR
export const generateBmr = createAction(
  '[Biometrics Component] Generate',
  props<{ value: number }>()
);

// Meal
export const generateBreakfast = createAction(
  '[Meal Component] Generate',
  props<{ value: number | null }>()
);

// Workout
export const generateWorkout = createAction(
  '[Workout Component] Generate',
  props<{ value: number | null }>()
);
