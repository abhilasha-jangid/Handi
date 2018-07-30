import { Component, OnInit, Inject } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})




export class CategoryProductsComponent implements OnInit {

  products: any;
  errMess: string;

  constructor(private productService: ProductService,
    private router: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    let id = this.router.snapshot.params['id'];

    this.productService.getCategoryProduct(id)
      .subscribe(res => {
        if (res.success) {
          this.products = res.data;
          console.log("categories details -->>", this.products);
        }
        else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error
        alert(error);
      })
  }




  /**  onSelect( product:Product)
    {
      this.selectProduct = product;
    }**/

}
