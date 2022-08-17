import { createAction, props } from '@ngrx/store';

export const generateBmr = createAction(
  '[Biometrics Component] Generate',
  props<{ value: number }>()
);
