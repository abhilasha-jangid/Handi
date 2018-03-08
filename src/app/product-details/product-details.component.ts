import { Component, OnInit,Input } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;


  constructor(private productService: ProductService,
    private router: ActivatedRoute,
    private location: Location ) { }

  ngOnInit() {
    let id = +this.router.snapshot.params['id'];
    this.productService.getProductId(id)
    .then(product=>{this.product = product});
  }

  goBack():void {
    this.location.back();
  }

}
