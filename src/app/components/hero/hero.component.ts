import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: false,
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
