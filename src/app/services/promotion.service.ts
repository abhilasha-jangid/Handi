import { Injectable } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService,
    private restangular: Restangular) { }

  getPromotions() : Observable<Promotion[]>{
    return Observable.of(PROMOTION).delay(2000);
  }

  getPromotionId(id:number):Observable<Promotion>{
    return Observable.of(PROMOTION.filter((promotion) => (promotion.id === id))[0]).delay(2000);
  }

  getPromotionFeature(): Observable<Promotion>{

    return this.http.get(baseURL + 'promotion/promotion?featured=true')
    .map(res=>{
       return this.processHTTPMsgService.extractData(res)[0];
  })
  .catch(error => { 
    console.log("hey i anm there...error")
    return this.processHTTPMsgService.handleError(error); });
}

}
