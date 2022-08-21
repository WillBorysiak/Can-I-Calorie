import { createAction, props } from '@ngrx/store';

// BMR
export const generateBmr = createAction(
  '[Biometrics Component] Generate',
  props<{ value: number }>()
);

// Breakfast
export const generateBreakfast = createAction(
  '[Breakfast Component] Generate',
  props<{ value: number | null }>()
);

// Lunch
export const generateLunch = createAction(
  '[Lunch Component] Generate',
  props<{ value: number | null }>()
);

// Dinner
export const generateDinner = createAction(
  '[Dinner Component] Generate',
  props<{ value: number | null }>()
);

// Snacks
export const generateSnack = createAction(
  '[Snack Component] Generate',
  props<{ value: number | null }>()
);

// Workout
export const generateWorkout = createAction(
  '[Workout Component] Generate',
  props<{ value: number | null }>()
);
