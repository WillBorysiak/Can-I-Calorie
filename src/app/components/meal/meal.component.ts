import { Component, OnInit } from '@angular/core';

export interface FoodInterface {
  food: string;
  cals: number;
}

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
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

  ngOnInit(): void {}
}
