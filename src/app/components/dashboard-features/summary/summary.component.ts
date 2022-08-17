import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SummaryInterface } from 'src/app/models/summary.model';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  bmr$!: Observable<number>;
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  // Table Values
  displayedColumns = ['event', 'cals'];
  totalsList: SummaryInterface[] = [
    { event: 'Breakfast', cals: 0 },
    { event: 'Lunch', cals: 0 },
    { event: 'Dinner', cals: 0 },
    { event: 'Snacks', cals: 0 },
    { event: 'Workouts', cals: 0 },
  ];

  //  Get Total Cals
  getTotalCals() {
    return this.totalsList
      .map((t) => t.cals)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor(private store: Store<{ bmr: number }>) {
    this.bmr$ = store.select('bmr');
  }

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }
}
