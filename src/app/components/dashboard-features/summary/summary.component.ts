import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/models/store.model';
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
  dinner$!: Observable<number>;
  snack$!: Observable<number>;
  workout$!: Observable<number>;

  totalCals: number = 0;

  // Component Variables
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  // Table Values
  displayedColumns = ['event', 'cals'];

  constructor(private store: Store<StoreInterface>) {
    this.dataSource = new MatTableDataSource([
      {
        event: 'Breakfast',
        cals: 0,
      },
      { event: 'Lunch', cals: 0 },
      { event: 'Dinner', cals: 0 },
      { event: 'Snacks', cals: 0 },
    ]);

    // Connecting to store
    this.bmr$ = store.select('bmr');
    this.breakfast$ = store.select('breakfast');
    this.lunch$ = store.select('lunch');
    this.dinner$ = store.select('dinner');
    this.snack$ = store.select('snack');
    this.workout$ = this.store.select('workout');

    // Adding Meals to the table
    this.breakfast$.subscribe((value) => {
      this.dataSource.data[0].cals = value;
      this.totalCals = this.getTotalCals();
    });
    this.lunch$.subscribe((value) => {
      this.dataSource.data[1].cals = value;
      this.totalCals = this.getTotalCals();
    });
    this.dinner$.subscribe((value) => {
      this.dataSource.data[2].cals = value;
      this.totalCals = this.getTotalCals();
    });
    this.snack$.subscribe((value) => {
      this.dataSource.data[3].cals = value;
      this.totalCals = this.getTotalCals();
    });
  }

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }

  //  Get Total Cals
  getTotalCals() {
    return this.dataSource.data
      .map((t) => t.cals)
      .reduce((acc, value) => acc! + value!, 0);
  }
}
