import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';


@Injectable()
export class ProductService {

  constructor() { }
  getProducts() : Promise<Product[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PRODUCT), 2000);
    });
  }
  getProductId(id:number): Promise<Product>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PRODUCT.filter((product) => (product.id === id))[0]), 2000);
    });
  }
  getProductFeature(): Promise<Product>{
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PRODUCT.filter((product) => product.featured)[0]), 2000);
    });
  }
}
