import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT } from '../shared/products';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class ProductService {

  constructor(private http2: HttpClient,
    private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService
  ) { }


  /** getProducts() : Observable<Product[]>{
     return this.http.get(baseURL + 'category/showCategories')
     .map(res => 
       {
         return this.processHTTPMsgService.extractData(res)
       })
       .catch(error => { 
         console.log("hey i anm there...error")
         return this.processHTTPMsgService.handleError(error); });
   }**/


  getProductId(id: number): Observable<Product> {
    return this.http.post(baseURL + 'product/productDetails', {
      "inId": id
    })
      .map(res => { return this.processHTTPMsgService.extractData(res) });
  }


  getProductFeature(): Observable<Product> {
    return this.http.get(baseURL + 'product/product?featured=true')
      .map(res => {
        // console.log("hey i anm there...",this.processHTTPMsgService.extractData(res)[0])
        return this.processHTTPMsgService.extractData(res)[0];
      })
      .catch(error => {
        // console.log("hey i anm there...error")
        return this.processHTTPMsgService.handleError(error);
      });
  }


  getCategoryType(): Observable<any> {
    return this.http.get(baseURL + 'category/showCategories')
      .map(res => {
        //console.log("hey i anm there...",this.processHTTPMsgService.extractData(res))
        return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => {
        //console.log("hey i anm there...error")
        return this.processHTTPMsgService.handleError(error);
      });
  }


  getCategoryProduct(id: string): Observable<any> {
    return this.http.post(baseURL + 'category/selectCategories', {
      "inId": id
    })
      .map(res => {
        //console.log("hey i anm there...",this.processHTTPMsgService.extractData(res))
        return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => {
        //console.log("hey i anm there...error")
        return this.processHTTPMsgService.handleError(error);
      });
  }

  addComment(product_id: string,rating : number, comment : string ): Observable<any> {
    return this.http2.post(baseURL + 'comment/addComment', {
      "inId": product_id,"rating" : rating , "comment" : comment
    })
      .map(res => {
        //console.log("hey i anm there...",this.processHTTPMsgService.extractData(res))
        //return this.processHTTPMsgService.extractData(res);
        return {'success': res['success'], 'data' : res['data']}
      })
      .catch(error => {
        //console.log("hey i anm there...error")
        return this.processHTTPMsgService.handleError(error);
      });
  }


}
