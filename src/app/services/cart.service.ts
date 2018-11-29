import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { baseURL } from '../shared/baseurl'

import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class CartService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService) { }


  addToCart(id: string): Observable<any> {
    return this.http.post<any>(baseURL + 'cart/addCart', {
      product_id: id
    })
      .map(res => {
        return { 'success': res.success, 'data': res.data };
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }



  showCart(): Observable<any> {
    return this.http.get<any>(baseURL + 'cart/showCart')
      .map(res => {
        return { 'success': res.success, 'data': res.data };
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  deleteFromCart(id: string,amount: number): Observable<any> {
    return this.http.post<any>(baseURL + 'cart/removeProductFromCart', {
      "product_id": id,"amount" : amount
    })
      .map(res => {
        return { 'success': res.success, 'data': res.data };
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  Order(order: any): Observable<any> {
    return this.http.post<any>(baseURL + 'order/orderd', {
      "address.address": order.address,
      "address.pincode": order.pincode,
      "address.state": order.state,
      "address.city": order.city,
      "address.landmark": order.landmark,
      "personal.firstname": order.firstname,
      "personal.lastname": order.lastname,
      "personal.mobile": order.mobile,
      "personal.email": order.email
    })
      .map(res => {
        return { 'success': res.success, 'data': res.data };
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}
