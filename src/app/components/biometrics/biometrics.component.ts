import { Component, OnInit } from '@angular/core';
import { generateBmr } from 'src/app/state/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.scss'],
  standalone: false,
})
export class BiometricsComponent implements OnInit {
  bmr!: number;
  sex!: string;
  activity!: string;
  age!: number | string;
  weight!: number | string;
  height!: number | string;

  constructor(private store: Store<{ bmr: number }>) {}

  submitBmr() {
    this.bmr = this.calculateBmr(
      this.sex,
      this.activity,
      this.age,
      this.weight,
      this.height
    );
    this.store.dispatch(generateBmr({ value: this.bmr }));
  }

  ngOnInit(): void {}

  calculateBmr(
    sex: string,
    activity: string,
    age: number | string,
    weight: number | string,
    height: number | string
  ) {
    if (sex === 'male') {
      const maleBmr = 66.5 + 13.75 * +weight + 5.003 * +height - 6.755 * +age;
      const totalBmr = maleBmr * +activity;
      return +totalBmr.toFixed(0);
    } else {
      const femaleBmr = 655.1 + 9.563 * +weight + 1.85 * +height - 4.676 * +age;
      const totalBmr = femaleBmr * +activity;
      return +totalBmr.toFixed(0);
    }
  }
}
