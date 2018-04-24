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
import 'rxjs/add/operator/map';
import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class ProductService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService,
    private restangular: Restangular
  ) { }

  
  getProducts() : Observable<Product[]>{
    return this.http.get(baseURL + 'products').map(res => {return this.processHTTPMsgService.extractData(res)});
  }


  getProductId(id:number): Observable<Product>{
      return this.http.get(baseURL + 'products/' + id)
      .map(res => {return this.processHTTPMsgService.extractData(res)});
  }


  getProductFeature(): Observable<Product>{
    return this.http.get(baseURL + 'product?featured=true')
    .map(res=>{ return this.processHTTPMsgService.extractData(res)[0];}); 
  }

  
}
