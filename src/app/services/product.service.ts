import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts() : Product[]{
    return PRODUCT;
  }

}
