import { createAction, props } from '@ngrx/store';

export const generateBmr = createAction(
  '[Biometrics Component] Generate',
  props<{ value: number }>()
);

export const generateBreakfast = createAction(
  '[Breakfast Component] Generate',
  props<{ value: number | null }>()
);

export const generateLunch = createAction(
  '[Lunch Component] Generate',
  props<{ value: number | null }>()
);

export const generateDinner = createAction(
  '[Dinner Component] Generate',
  props<{ value: number | null }>()
);

export const generateSnack = createAction(
  '[Snack Component] Generate',
  props<{ value: number | null }>()
);

export const generateWorkout = createAction(
  '[Workout Component] Generate',
  props<{ value: number | null }>()
);
