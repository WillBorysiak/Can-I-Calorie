import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { BiometricsComponent } from './components/biometrics/biometrics.component';
import { MealComponent } from './components/dashboard-features/meal/meal.component';
import { SummaryComponent } from './components/dashboard-features/summary/summary.component';
import { WorkoutComponent } from './components/dashboard-features/workout/workout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroComponent } from './components/hero/hero.component';
import { appReducer } from './state/app.reducer';

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
      app: appReducer,
    }),
    StoreModule.forFeature('store', appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
