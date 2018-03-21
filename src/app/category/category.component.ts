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
    this.productService.getProducts()
    .subscribe(products => {this.products = products});
  }

  onSelect( product:Product)
  {
    this.selectProduct = product;
  }

}
