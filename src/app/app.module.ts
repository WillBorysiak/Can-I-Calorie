import { AppComponent } from './app.component';
import { BiometricsComponent } from './components/biometrics/biometrics.component';
import { bmrReducer } from './state/bmr.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MealComponent } from './components/dashboard-features/meal/meal.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SummaryComponent } from './components/dashboard-features/summary/summary.component';
import { WorkoutComponent } from './components/dashboard-features/workout/workout.component';
import { workoutReducer } from './state/workout.reducer';
import {
  breakfastReducer,
  dinnerReducer,
  lunchReducer,
  snackReducer,
} from './state/meal.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BiometricsComponent,
    DashboardComponent,
    MealComponent,
    WorkoutComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    StoreModule.forRoot({
      bmr: bmrReducer,
      breakfast: breakfastReducer,
      lunch: lunchReducer,
      dinner: dinnerReducer,
      snack: snackReducer,
      workout: workoutReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
