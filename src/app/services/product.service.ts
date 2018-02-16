import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts() : Product[]{
    return PRODUCT;
  }
  getProductId(id:number): Product{
    return PRODUCT.filter((product) => (product.id === id))[0];
  }
  getProductFeature(): Product{
    return PRODUCT.filter((product) =>(product.featured))[0];
  }
}
