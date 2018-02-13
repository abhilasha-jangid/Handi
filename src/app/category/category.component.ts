import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products = PRODUCT;
  selectProduct : Product;

  constructor() { }

  ngOnInit() {
  }

  onSelect( product:Product)
  {
    this.selectProduct = product;
  }

}
