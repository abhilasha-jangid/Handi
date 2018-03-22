import { Component, OnInit,Input } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Comment } from '../shared/comment';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  commentForm: FormGroup;
  comment: Comment;


  constructor(private productService: ProductService,
    private router: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder ) { 

      this.createForm();
    }

    createForm() {
      this.commentForm = this.fb.group({
        name: '',
        comment: ''
      });
    }

    onSubmit() {
      this.comment = this.commentForm.value;
      console.log(this.comment);
      this.commentForm.reset();
    }

  ngOnInit() {
    let id = +this.router.snapshot.params['id'];
    this.productService.getProductId(id)
    .subscribe(product=>{this.product = product});
  }

  goBack():void {
    this.location.back();
  }

}
