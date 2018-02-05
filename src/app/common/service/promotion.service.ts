
import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }

  getPromotionsByID(id:number) : Promotion {
    return PROMOTIONS.filter((Promotion)=>Promotion.id==id)[0];
  }

  getFeaturedPromotions() : Promotion {
    return PROMOTIONS.filter((Promotion)=>Promotion.featured)[0];
  }

}
