import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { SummaryInterface } from 'src/app/models/summary.model';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  // Table Values
  displayedColumns = ['event', 'cals'];
  totalsList: SummaryInterface[] = [
    { event: 'Breakfast', cals: 500 },
    { event: 'Lunch', cals: 600 },
    { event: 'Dinner', cals: 700 },
    { event: 'Snacks', cals: 200 },
    { event: 'Workouts', cals: -500 },
  ];

  //  Get Total Cals
  getTotalCals() {
    return this.totalsList
      .map((t) => t.cals)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor() {}

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }
}
