import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Biometrics', cols: 2, rows: 1 },
          { title: 'Breakfast', cols: 2, rows: 1 },
          { title: 'Lunch', cols: 2, rows: 1 },
          { title: 'Dinner', cols: 2, rows: 1 },
          { title: 'Snacks', cols: 2, rows: 1 },
          { title: 'Workouts', cols: 2, rows: 1 },
          { title: 'Calories', cols: 2, rows: 2 },
        ];
      }

      // Desktop
      return [
        { title: 'Biometrics', cols: 2, rows: 1 },
        { title: 'Breakfast', cols: 1, rows: 1 },
        { title: 'Workouts', cols: 1, rows: 1 },
        { title: 'Lunch', cols: 1, rows: 1 },
        { title: 'Calories', cols: 1, rows: 3 },
        { title: 'Dinner', cols: 1, rows: 1 },
        { title: 'Snacks', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
