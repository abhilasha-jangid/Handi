import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts() : Promise<Product[]>{
    return Promise.resolve(PRODUCT);
  }
  getProductId(id:number): Promise<Product>{
    return Promise.resolve(PRODUCT.filter((product) => (product.id === id))[0]);
  }
  getProductFeature(): Promise<Product>{
    return Promise.resolve(PRODUCT.filter((product) =>(product.featured))[0]);
  }
}
