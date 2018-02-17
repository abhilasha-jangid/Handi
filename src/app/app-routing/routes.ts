import { Routes } from '@angular/router';

import { CategoryComponent } from '../category/category.component';
import {ProductDetailsComponent } from '../product-details/product-details.component';
import { HomeComponent }  from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContectComponent } from '../contect/contect.component';


export const routes: Routes=[
    {
        path: 'home' , component: HomeComponent
    },
    {   path:'aboutus',component: AboutComponent },
    {
        path: 'category', component: CategoryComponent
    },
    {path : 'productDetail/:id', component:ProductDetailsComponent},
    { path: 'contectus', component: ContectComponent},
    { path: '', redirectTo: '/home', pathMatch:'full'}
];