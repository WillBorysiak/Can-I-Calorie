import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { FoodInterface } from 'src/app/models/food.model';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/models/store.model';
import {
  generateBreakfast,
  generateDinner,
  generateLunch,
  generateSnack,
} from 'src/app/state/app.actions';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  standalone: false,
})
export class MealComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;
  dataSource!: MatTableDataSource<FoodInterface>;

  food!: string;
  cals!: number | null;

  displayedColumns = ['food', 'cals'];

  constructor(private store: Store<StoreInterface>) {
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

  createFood() {
    const foodObj = {
      food: capitalize(this.food),
      cals: this.cals,
    };
    this.dataSource.data.push(foodObj);
    this.dataSource._updateChangeSubscription();
    if (this.title === 'breakfast') {
      this.store.dispatch(generateBreakfast({ value: this.getTotalCals() }));
    }
    if (this.title === 'lunch') {
      this.store.dispatch(generateLunch({ value: this.getTotalCals() }));
    }
    if (this.title === 'dinner') {
      this.store.dispatch(generateDinner({ value: this.getTotalCals() }));
    }
    if (this.title === 'snacks') {
      this.store.dispatch(generateSnack({ value: this.getTotalCals() }));
    }

    this.food = '';
    this.cals = null;
  }
}
