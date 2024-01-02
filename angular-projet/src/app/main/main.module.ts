import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../pages/home/home.component';
import { ProductComponent } from '../pages/product/product.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from './main.component';
import { PrimeNgModule } from '../primeng.module';
import { ProductAddComponent } from '../modals/product-add/product-add.component';
import { ProductUpdateComponent } from '../modals/product-update/product-update.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ProductComponent,
    HeaderComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimeNgModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class MainModule { }
