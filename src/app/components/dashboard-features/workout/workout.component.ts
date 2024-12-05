import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { generateWorkout } from 'src/app/state/app.actions';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { WorkoutInterface } from 'src/app/models/workouts.model';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  standalone: false,
})
export class WorkoutComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;
  dataSource: MatTableDataSource<WorkoutInterface>;

  workout!: string;
  cals!: number | null;

  displayedColumns = ['workout', 'cals'];

  constructor(private store: Store<{ workout: number }>) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }

  getTotalCals() {
    return this.dataSource.data
      .map((t) => t.cals)
      .reduce((acc, value) => acc! + value!, 0);
  }

  createWorkout() {
    const workoutObj = {
      exercise: capitalize(this.workout),
      cals: this.cals,
    };
    this.dataSource.data.push(workoutObj);
    this.dataSource._updateChangeSubscription();
    this.store.dispatch(generateWorkout({ value: this.getTotalCals() }));
    this.workout = '';
    this.cals = null;
  }
}
