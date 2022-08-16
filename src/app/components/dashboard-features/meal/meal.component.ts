import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { FoodInterface } from 'src/app/models/food.model';
import { MatTableDataSource } from '@angular/material/table';

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

  // Create food and add to table
  createFood() {
    const foodObj = {
      food: capitalize(this.food),
      cals: this.cals,
    };
    this.dataSource.data.push(foodObj);
    this.dataSource._updateChangeSubscription();
    this.food = '';
    this.cals = null;
  }
}
