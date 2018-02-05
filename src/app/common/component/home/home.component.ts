import { Component, OnInit } from '@angular/core';

import {Dish} from '../../shared/dish'
import {Promotion} from '../../shared/promotion'
import { PromotionService } from '../../service/promotion.service';
import { DishService } from '../../service/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  constructor(private promotionService : PromotionService, private dishService : DishService) { }

  ngOnInit() {
     this.dish = this.dishService.getFeaturedDish();
     this.promotion = this.promotionService.getFeaturedPromotions();

  }

}
