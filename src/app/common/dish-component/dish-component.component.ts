import { Component, OnInit ,Input } from '@angular/core';

import {Dish} from '../shared/dish'

import {Params, ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
import { DishService } from '../service/dish.service';
 

@Component({
  selector: 'app-dish-component',
  templateUrl: './dish-component.component.html',
  styleUrls: ['./dish-component.component.css']
})
export class DishComponentComponent implements OnInit {

  dish : Dish;
  
  constructor(private dishService : DishService,
               private location: Location,
               private route: ActivatedRoute) {
   }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishService.getDishById(id);
  }

  goBack() : void {

    this.location.back();


  }

}
