import { DishService } from './../service/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish'

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {
  dishes:Dish[] ;
  selectedDish :  Dish;

  constructor(private dishService: DishService) {   
   }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

   onSelect(dish){
     this.selectedDish = dish;

   }

}
