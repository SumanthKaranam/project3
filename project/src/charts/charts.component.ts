import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { Category, Product, ProductService } from '../product.service';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, NgChartsModule, MatCardModule, MatTabsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  // Bar Chart
  barChartLabels: string[] = [];
  barChartData: number[] = [];

  // Pie Chart
  pieChartLabels: string[] = [];
  pieChartData: number[] = [];

  constructor(private productService: ProductService) {}

ngOnInit(): void {
  // 1️⃣ Bar Chart: Title vs Price from Products API
  this.productService.getProducts().subscribe((products: Product[]) => {
    const limitedProducts = products.slice(0, 7);

    this.barChartLabels = limitedProducts.map(p => p.title);
    this.barChartData = limitedProducts.map(p => p.price);
  });

  // 2️⃣ Pie Chart: Category Distribution from Categories API
  this.productService.getCategories().subscribe((categories: Category[]) => {
    // Count how many products belong to each category
    this.productService.getProducts().subscribe((products: Product[]) => {
      const categoryCounts: { [key: string]: number } = {};

      for (const category of categories) {
        const count = products.filter(p => p.category?.id === category.id).length;
        if (count > 0) {
          categoryCounts[category.name] = count;
        }
      }

      this.pieChartLabels = Object.keys(categoryCounts);
      this.pieChartData = Object.values(categoryCounts);
    });
  });
}

  // Chart.js options
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    y: {
      beginAtZero: true
    }
  }
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
}
