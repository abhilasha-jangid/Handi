import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';


@Injectable()
export class ProductService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService
  ) { }


  
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
