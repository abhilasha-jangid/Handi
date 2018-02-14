import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products : Product[];
  selectProduct : Product;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSelect( product:Product)
  {
    this.selectProduct = product;
  }

}
