import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreInterface } from '../models/store.model';
import {
  getBmr,
  getBreakfast,
  getDinner,
  getLunch,
  getSnack,
  getWorkout,
} from './app.reducer';

export const selectStoreState = createFeatureSelector<StoreInterface>('store');

export const selectBmr = createSelector(selectStoreState, getBmr);
export const selectWorkout = createSelector(selectStoreState, getWorkout);
export const selectBreakfast = createSelector(selectStoreState, getBreakfast);
export const selectLunch = createSelector(selectStoreState, getLunch);
export const selectDinner = createSelector(selectStoreState, getDinner);
export const selectSnack = createSelector(selectStoreState, getSnack);
