import { Component } from '@angular/core';
import { trigger } from '@angular/animations';
import {
  enterTransitionHero,
  enterTransitionMetrics,
  enterTransitionDashboard,
} from './animations/animations';

const fadeInHero = trigger('fadeInHero', [enterTransitionHero]);
const fadeInMetrics = trigger('fadeInMetrics', [enterTransitionMetrics]);
const fadeInDashboard = trigger('fadeInDashboard', [enterTransitionDashboard]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInHero, fadeInMetrics, fadeInDashboard],
  standalone: false,
})
export class AppComponent {
  title = 'can-i-calories';
}
