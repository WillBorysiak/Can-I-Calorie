import { animate, style, transition } from '@angular/animations';

export const enterTransitionHero = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '0.25s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

export const enterTransitionMetrics = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '0.5s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

export const enterTransitionDashboard = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);
