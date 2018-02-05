
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule , MatOptionModule,   MatSlideToggleModule,   MatCheckboxModule,  MatDialogModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatChipsModule, MatListModule, MatInputModule,MatGridListModule,MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';

import { MenuComponentComponent } from './common/menu-component/menu-component.component';
import { DishService } from './common/service/dish.service';
import { DishComponentComponent } from './common/dish-component/dish-component.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { HomeComponent } from './common/component/home/home.component';
import { AboutComponent } from './common/component/about/about.component';
import { ContactComponent } from './common/component/contact/contact.component';

import { UpperCasePipePipe } from './pipe/upper-case-pipe.pipe';
import { DataServiceService } from './service/data-service.service';
import { PromotionService }  from './common/service/promotion.service';


import { AppRoutingModule } from './common/module/app-routing/app-routing.module';

import 'hammerjs';
import { LoginComponent } from './common/component/login/login.component';


const MAT_MODULES  = [
MatCheckboxModule ,
MatToolbarModule,
MatSidenavModule,
MatButtonModule,
 MatChipsModule,
 MatListModule,
 MatInputModule,
 MatGridListModule,
 MatCardModule,
 MatDialogModule,
 MatSlideToggleModule,
 MatSelectModule,
 MatOptionModule
];


@NgModule({
  declarations: [
    AppComponent,
    UpperCasePipePipe,
    MenuComponentComponent,
    DishComponentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
     MAT_MODULES,
     FlexLayoutModule,
     BrowserAnimationsModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule
    
  ],

  entryComponents: [
  LoginComponent
  ],
  exports: [
     MAT_MODULES
  ],
  providers: [DataServiceService, DishService, PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
