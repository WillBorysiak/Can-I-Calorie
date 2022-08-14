import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { WorkoutInterface } from 'src/app/models/workouts.model';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  // Table Values
  displayedColumns = ['food', 'cals'];
  workoutList: WorkoutInterface[] = [
    { exercise: 'Running', cals: 500 },
    { exercise: 'Walking', cals: 350 },
    { exercise: 'Yoga', cals: 150 },
  ];

  //  Get Total Cals
  getTotalCals() {
    return this.workoutList
      .map((t) => t.cals)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor() {}

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }
}
