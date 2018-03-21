import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class ProductService {

  constructor() { }

  getProducts() : Observable<Product[]>{
    return Observable.of(PRODUCT).delay(2000);
  }
  getProductId(id:number): Observable<Product>{
      return Observable.of(PRODUCT.filter((product) => (product.id === id))[0]).delay(2000);
  }
  getProductFeature(): Observable<Product>{
    return  Observable.of(PRODUCT.filter((product) => product.featured)[0]).delay(2000);
  }
}
