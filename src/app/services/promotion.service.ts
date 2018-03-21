import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions() : Observable<Promotion[]>{
    return Observable.of(PROMOTION).delay(2000);
  }

  getPromotionId(id:number):Observable<Promotion>{
    return Observable.of(PROMOTION.filter((promotion) => (promotion.id === id))[0]).delay(2000);
  }

  getPromotionFeature(): Observable<Promotion>{
    return  Observable.of(PROMOTION.filter((promotion) => promotion.featured)[0]).delay(2000);
  }

}
