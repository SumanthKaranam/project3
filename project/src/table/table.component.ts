import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Product, ProductService } from '../product.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  trigger,
  transition,
  style,
  animate,
  query
} from '@angular/animations';

@Component({
  selector: 'app-table',
  standalone: true,
  animations: [
  trigger('cardAnimation', [
    transition(':enter', [
      query('mat-card', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })  // <-- Fix applied here
    ])
  ])
],
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule, MatPaginatorModule, MatCardModule,MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['image', 'title', 'price', 'category'];
  dataSource = new MatTableDataSource<Product>([]);

  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


constructor(private productService: ProductService) {}

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (products) => {
      this.dataSource.data = products;
      this.isLoading = false;
    },
    error: () => {
      this.isLoading = false;
    }
  });
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}

}
