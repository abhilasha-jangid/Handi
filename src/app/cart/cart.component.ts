import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any;
  constructor(private cartService: CartService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.showCart();
  }
  showCart() {
    this.cartService.showCart()
      .subscribe(res => {
        if (res.success) {
          this.products = []
          for (var i = 0; i < res.data.length; i++) {
            var p = {};
            p['id'] = res.data[i].product._id;
            p['name'] = res.data[i].product.name;
            p['image'] = res.data[i].product.image_url;
            p['quantity'] = res.data[i].quantity;
            p['price'] = res.data[i].product.price * res.data[i].quantity;
            p['original'] = res.data[i].product.price;
            this.products.push(p);
          }
          console.log("products in cart", this.products)
        }
      },
      error => {
        console.log(error);
        alert('Please LogIn First');
      })
  }

  deleteCart(id: string ,amount: number) {
    this.cartService.deleteFromCart(id,amount)
      .subscribe(res => {
        if (res.success) {
          this.showCart();
        }
      },
      error => {
        console.log(error);
        alert('Please LogIn First');
      })
  }

}
