import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver
    .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map(({ matches }) => {
        if (matches) {
          // Mobile
          return [
            { title: 'Breakfast', cols: 2, rows: 1, breakfast: true },
            { title: 'Lunch', cols: 2, rows: 1, lunch: true },
            { title: 'Dinner', cols: 2, rows: 1, dinner: true },
            { title: 'Snacks', cols: 2, rows: 1 },
            { title: 'Workouts', cols: 2, rows: 1 },
            { title: 'Calories', cols: 2, rows: 1 },
          ];
        }

        // Desktop
        return [
          { title: 'Breakfast', cols: 1, rows: 1, breakfast: true },
          { title: 'Snacks', cols: 1, rows: 1 },
          { title: 'Lunch', cols: 1, rows: 1, lunch: true },
          { title: 'Workouts', cols: 1, rows: 1 },
          { title: 'Dinner', cols: 1, rows: 1, dinner: true },
          { title: 'Calories', cols: 1, rows: 1 },
        ];
      })
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
