import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/models/store.model';
import { SummaryInterface } from 'src/app/models/summary.model';
import {
  selectBmr,
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectSnack,
  selectWorkout,
} from 'src/app/state/app.selectors';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: false,
})
export class SummaryComponent implements OnInit {
  dataSource!: MatTableDataSource<SummaryInterface>;

  bmr$!: Observable<number>;
  breakfast = 0;
  lunch = 0;
  dinner = 0;
  snack = 0;
  workout$!: Observable<number>;

  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  displayedColumns = ['event', 'cals'];

  constructor(private store: Store<StoreInterface>) {
    this.dataSource = new MatTableDataSource<SummaryInterface>([
      {
        event: 'Breakfast',
        cals: 0,
      },
      { event: 'Lunch', cals: 0 },
      { event: 'Dinner', cals: 0 },
      { event: 'Snacks', cals: 0 },
    ]);
  }

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);

    this.bmr$ = this.store.select(selectBmr);
    this.workout$ = this.store.select(selectWorkout);

    this.store.select(selectBreakfast).subscribe((data) => {
      this.breakfast = data;
      this.refresh();
    });
    this.store.select(selectLunch).subscribe((data) => {
      this.lunch = data;
      this.refresh();
    });
    this.store.select(selectDinner).subscribe((data) => {
      this.dinner = data;
      this.refresh();
    });
    this.store.select(selectSnack).subscribe((data) => {
      this.snack = data;
      this.refresh();
    });
  }
  refresh() {
    this.dataSource.data = [
      {
        event: 'Breakfast',
        cals: this.breakfast,
      },
      { event: 'Lunch', cals: this.lunch },
      { event: 'Dinner', cals: this.dinner },
      { event: 'Snacks', cals: this.snack },
    ];
  }

  getTotalCals() {
    return this.dataSource.data
      .map((t) => t.cals)
      .reduce((acc, value) => acc! + value!, 0);
  }
}
