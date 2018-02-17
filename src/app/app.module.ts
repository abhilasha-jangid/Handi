import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { hammerjs } from 'hammerjs';
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

import { FormsModule } from '@angular/forms';


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
    LoginComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,FlexLayoutModule,BrowserAnimationsModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProductService,PromotionService,CorporateService,ArtistService],
  entryComponents:[LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
