import { Component, OnInit,Inject } from '@angular/core';

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
  categories : any;
  errMess : string;

  constructor(private productService:ProductService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  /**  this.productService.getCategoryType()
    .subscribe(categories => {this.categories = categories});**/

    this.productService.getCategoryType()
    .subscribe(res => {
      if (res.success) {  
        this.categories = res.data;
        console.log("cate gories details -->>",this.categories);         
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
