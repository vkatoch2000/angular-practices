import { Component } from '@angular/core';
import { Routes } from '@angular/router';


import { DishComponentComponent } from './../../dish-component/dish-component.component';
import { MenuComponentComponent } from '../../menu-component/menu-component.component';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { HomeComponent } from '../../component/home/home.component';
import { AboutComponent } from '../../component/about/about.component';
import { ContactComponent } from '../../component//contact/contact.component';


export const routes : Routes = [
    {path:'home', component : HomeComponent},  // push state in HTML 5
    {path:'menu', component : MenuComponentComponent},
    {path:'contact', component : ContactComponent},
    {path:'dishdetail/:id', component : DishComponentComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
];