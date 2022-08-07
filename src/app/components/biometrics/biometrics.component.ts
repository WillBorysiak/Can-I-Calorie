import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.scss'],
})
export class BiometricsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('test');
  }
}
