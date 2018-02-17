import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Artist } from '../shared/artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: Product;
  promotion : Promotion;
  artist : Artist;

  constructor( private productService:ProductService,
               private promotionService:PromotionService,
              private artistService:ArtistService) { }

  ngOnInit() {
    this.product = this.productService.getProductFeature();
    this.promotion = this.promotionService.getPromotionFeature();
    this.artist = this.artistService.getArtistFeature();
  }

}
