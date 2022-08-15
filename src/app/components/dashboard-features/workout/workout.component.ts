import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource: MatTableDataSource<WorkoutInterface>;

  workout!: string;
  cals!: number | null;

  // Table Values
  displayedColumns = ['workout', 'cals'];

  constructor() {
    this.dataSource = new MatTableDataSource();
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

  // Create Workout and add to table
  createWorkout() {
    const workout = {
      exercise: capitalize(this.workout),
      cals: this.cals,
    };
    this.dataSource.data.push(workout);
    this.dataSource._updateChangeSubscription();
    this.workout = '';
    this.cals = null;
  }
}
