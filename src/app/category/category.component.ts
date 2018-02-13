import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';

const PRODUCT: Product[] =
                            [

                              {
                                name: 'Bhudha',
                                image: '/assets/handi_image/bhudha.jpg',
                                price: '11500',
                                description: 'brss metalic murti of bhudha . it really a sign of peace. it make the people to love each other.recall them about the truth of life.it make a real knowlege to the existance of humen.'

                              },
                              {
                                name: 'Manikanika ',
                                image: '/assets/handi_image/bamboo.jpg',
                                price: '2345',
                                description: 'bamboo made faces'
                              },
                              {
                                name: 'Mona_lisa',
                                image: '/assets/handi_image/handicraft-bone-3.jpg',
                                price: '16000',
                                description: 'bone made old way of entrainment'
                              },
                              {
                                name: 'Bastar_Chhattisgarh',
                                image: '/assets/handi_image/bell-metal-handicraft-bastar-chhattisgarh-india-asia-GD3N9D.jpg',
                                price: '23000',
                                description: 'ball metal made handicraft bastar chhattisgarh'
                              }
                            ];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products = PRODUCT;
  selectProduct =  PRODUCT[0];

  constructor() { }

  ngOnInit() {
  }

}
