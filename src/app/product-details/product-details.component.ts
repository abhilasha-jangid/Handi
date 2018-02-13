import { Component, OnInit,Input } from '@angular/core';

import { Product } from '../shared/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product: Product;


  constructor() { }

  ngOnInit() {
  }

}
