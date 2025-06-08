// app.routes.ts
import { Routes } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { ChartsComponent } from '../charts/charts.component';
import { TableComponent } from '../table/table.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CardsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'table', component: TableComponent },
  { path: '**', redirectTo: 'dashboard' }
];
