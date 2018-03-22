import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,MatSidenav, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { ProductService } from './services/product.service';
import { PromotionService } from './services/promotion.service';
import { CorporateService } from './services/corporate.service';
import { ArtistService } from './services/artist.service';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContectComponent } from './contect/contect.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import  'hammerjs';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';

import {ProcessHttpmsgService} from './services/process-httpmsg.service'
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContectComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,FlexLayoutModule,BrowserAnimationsModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,MatSidenavModule,HttpModule
  ],
  providers: [ProductService,PromotionService,CorporateService,ArtistService,ProcessHttpmsgService,
    {provide: 'BaseURL', useValue: baseURL}],
  entryComponents:[LoginComponent,SignupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
