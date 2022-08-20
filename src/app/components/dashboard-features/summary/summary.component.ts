import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SummaryInterface } from 'src/app/models/summary.model';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  // Data Source
  dataSource!: MatTableDataSource<SummaryInterface>;
  // Store Variables
  bmr$!: Observable<number>;
  breakfast$!: Observable<number>;
  lunch$!: Observable<number>;
  workout$!: Observable<number>;

  // Component Variables
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  // Table Values
  displayedColumns = ['event', 'cals'];

  //  Get Total Cals
  getTotalCals() {
    return this.dataSource.data
      .map((t) => t.cals)
      .reduce((acc, value) => acc! + value!, 0);
  }

  constructor(
    private store: Store<{
      bmr: number;
      breakfast: number;
      lunch: number;
      workout: number;
    }>
  ) {
    this.dataSource = new MatTableDataSource([
      {
        event: 'Breakfast',
        cals: 0,
      },
      { event: 'Lunch', cals: 0 },
      { event: 'Dinner', cals: 0 },
      { event: 'Snacks', cals: 0 },
    ]);

    // Adding values to the totals
    this.bmr$ = store.select('bmr');
    this.breakfast$ = store.select('breakfast');
    this.lunch$ = store.select('lunch');
    this.workout$ = this.store.select('workout');
    // Adding Meals to the table
    this.breakfast$.subscribe((value) => {});
    this.lunch$.subscribe((value) => {});
  }

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }
}
