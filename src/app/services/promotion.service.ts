import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }
  getPromotions() : Promotion[]{
    return PROMOTION;
  }
  getPromotionId(id:number): Promotion{
    return PROMOTION.filter((promo) => (promo.id === id))[0];
  }
  getPromotionFeature(): Promotion{
    return PROMOTION.filter((promo) =>(promo.featured))[0];
  }

}
