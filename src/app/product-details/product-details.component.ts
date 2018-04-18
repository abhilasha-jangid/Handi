import { Component, OnInit,Input,Inject } from '@angular/core';

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

  formErrors = {
    'name': '',
    'comment' : ''
  }

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'comment is required.',
      'minlength':     'comment must be at least 20 characters long.',
      'maxlength':     'comment cannot be more than 1225 characters long.'
    }
  }


  constructor(private productService: ProductService,
    private router: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder ,
    @Inject('BaseURL') private BaseURL) { 

      this.createForm();
    }


  ngOnInit() {
    let id = +this.router.snapshot.params['id'];
    this.productService.getProductId(id)
    .subscribe(product=>{this.product = product});
  }

  createForm() {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1225)]]
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
    this.commentForm.reset({
      name: '',
      comment: ''
    });
  }

  goBack():void {
    this.location.back();
  }

}
