import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }
  getPromotions() : Promise<Promotion[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTION), 2000);
    });
  }
  getPromotionId(id:number):Promise<Promotion>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTION.filter((promotion) => (promotion.id === id))[0]), 2000);
    });
  }
  getPromotionFeature(): Promise<Promotion>{
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTION.filter((promotion) => promotion.featured)[0]), 2000);
    });
  }

}
