import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'mobile': '',
    'email': '',
    'address': '',
    'city': '',
    'state': '',
    'pincode': '',
    'landmark': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.'
    },
    'lastname': {
      'required': 'Last Name is required.'
    },
    'mobile': {
      'required': 'Mobile number is required.',
      'pattern': 'Mobile number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
    'address': {
      'required': 'Address is required.'
    },
    'city': {
      'required': 'city is required.'
    },
    'state': {
      'required': 'State is required.'
    },
    'pincode': {
      'required': 'pincode is required.',
      'minlength': 'Invalid Pincode',
      'maxlength': 'Invalid Pincode'
    },
    'landmark': {
      'required': 'landmark is required.'
    },
  };


  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.orderForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      mobile: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });

    this.orderForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }



  onValueChanged(data?: any) {
    if (!this.orderForm) { return; }
    const form = this.orderForm;
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
    this.cartService.Order(this.orderForm.value)
      .subscribe(res => {
        if (res.success) {
          alert('Order Successfully')
        }
      },
      error => {
        console.log(error);
        alert(error);
      })
    this.orderForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
    });
  }

}
