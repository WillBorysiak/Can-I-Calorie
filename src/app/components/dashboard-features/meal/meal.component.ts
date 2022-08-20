import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { FoodInterface } from 'src/app/models/food.model';
import { generateBreakfast, generateLunch } from 'src/app/state/app.actions';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;
  dataSource!: MatTableDataSource<FoodInterface>;

  food!: string;
  cals!: number | null;

  // Table Values
  displayedColumns = ['food', 'cals'];

  constructor(private store: Store<{ breakfast: number; lunch: number }>) {
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

  // Create food and add to table
  createFood() {
    const foodObj = {
      food: capitalize(this.food),
      cals: this.cals,
    };
    this.dataSource.data.push(foodObj);
    this.dataSource._updateChangeSubscription();
    if (this.title === 'breakfast') {
      this.store.dispatch(generateBreakfast({ value: this.getTotalCals() }));
      console.log('breakfast add');
      console.log(this.getTotalCals());
    }
    if (this.title === 'lunch') {
      this.store.dispatch(generateLunch({ value: this.getTotalCals() }));
      console.log('lunch add');
      console.log(this.getTotalCals());
    }
    this.food = '';
    this.cals = null;
  }
}
