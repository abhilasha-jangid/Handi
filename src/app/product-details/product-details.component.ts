import { Component, OnInit, Input, Inject } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
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
  comment: any;

  formErrors = {
    'comment': ''
  }

  validationMessages = {
    'comment': {
      'required': 'comment is required.',
      'minlength': 'comment must be at least 20 characters long.',
      'maxlength': 'comment cannot be more than 1225 characters long.'
    }
  }


  constructor(private productService: ProductService,
    private router: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {

    this.createForm();
  }


  ngOnInit() {
    let id = this.router.snapshot.params['id'];
    console.log("catgory ids", id)
    this.productService.getProductId(id)
      .subscribe(product => {
        this.product = product['data']
      });
  }

  createForm() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1225)]],
      rating: ['', [Validators.required]]
    })
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  };

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    console.log(this.comment);
    let id = this.router.snapshot.params['id'];
    this.productService.addComment(id, this.comment.rating, this.comment.comment)
      .subscribe(res => {
        if (res.success) {
          alert('Comment Added Successfully');
          this.commentForm.reset({
            rating: 1,
            comment: ''
          });
        }
      },
      error => {
        console.log(error);
        alert('Please LogIn First');
      })
  }

  goBack(): void {
    this.location.back();
  }

}
