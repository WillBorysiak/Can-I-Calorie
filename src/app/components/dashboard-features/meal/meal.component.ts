import { capitalize } from 'src/app/utils/capitalize';
import { Component, Input, OnInit } from '@angular/core';
import { FoodInterface } from 'src/app/models/food.model';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder!: string;
  titleCaptialized!: string;

  // Table Values
  displayedColumns = ['food', 'cals'];
  foodList: FoodInterface[] = [
    { food: 'Porridge', cals: 200 },
    { food: 'Milk', cals: 50 },
    { food: 'Banana', cals: 100 },
    { food: 'Blueberries', cals: 75 },
    { food: 'Strawberries', cals: 50 },
  ];

  //  Get Total Cals
  getTotalCals() {
    return this.foodList
      .map((t) => t.cals)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor() {}

  ngOnInit(): void {
    this.titleCaptialized = capitalize(this.title);
  }
}
