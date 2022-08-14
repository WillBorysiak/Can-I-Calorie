import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.scss'],
})
export class BiometricsComponent implements OnInit {
  sex!: string;
  activity!: string;
  age!: number | string;
  weight!: number | string;
  height!: number | string;

  constructor() {}

  ngOnInit(): void {}

  getBiometricData() {
    // Calculate BMR
    this.calculateBmr(
      this.sex,
      this.activity,
      this.age,
      this.weight,
      this.height
    );
    console.log(
      this.calculateBmr(
        this.sex,
        this.activity,
        this.age,
        this.weight,
        this.height
      )
    );
    // Clear Values
    this.sex = '';
    this.activity = '';
    this.age = '';
    this.weight = '';
    this.height = '';
  }

  calculateBmr(
    sex: string,
    activity: string,
    age: number | string,
    weight: number | string,
    height: number | string
  ) {
    // Male Calculation
    if (sex === 'male') {
      const maleBmr = 66.5 + 13.75 * +weight + 5.003 * +height - 6.755 * +age;
      const totalBmr = maleBmr * +activity;
      return +totalBmr.toFixed(0);
      // Female Calculation
    } else {
      const femaleBmr = 655.1 + 9.563 * +weight + 1.85 * +height - 4.676 * +age;
      const totalBmr = femaleBmr * +activity;
      return +totalBmr.toFixed(0);
    }
  }
}
