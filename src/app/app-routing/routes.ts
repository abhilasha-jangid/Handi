import { Routes } from '@angular/router';

import { CategoryComponent } from '../category/category.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContectComponent } from '../contect/contect.component';
import { CategoryProductsComponent } from '../category-products/category-products.component';
import { CartComponent } from '../cart/cart.component';
import { OrderComponent } from '../order/order.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    { path: 'aboutus', component: AboutComponent },
    {
        path: 'category', component: CategoryComponent
    },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'category-products/:id', component: CategoryProductsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contectus', component: ContectComponent },
    { path: 'order', component: OrderComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];