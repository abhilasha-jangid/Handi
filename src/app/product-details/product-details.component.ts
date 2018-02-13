import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';
import { Product } from '../shared/product';

const PRODUCT: Product[] =
[

  {
    name: 'Bhudha',
    image: '/assets/handi_image/bhudha.jpg',
    price: '11500',
    description: 'brss metalic murti of bhudha . it really a sign of peace. it make the people to love each other.recall them about the truth of life.it make a real knowlege to the existance of humen.'

  }
]

const COMMENT: Comment[] =
                            [

                              {
                                comment: 'it is really a AWwwwOSM product.',
                                rating: '5 stars',
                                customer_name: 'Vipin chodhury',
                                date: '14 feb 2018'

                              },
                              {
                                comment: 'it gives peace to my house. ',
                                rating: '4.5 stars',
                                customer_name: 'Abhilsha jangid',
                                date: '15 feb 2018'
                              },
                              {
                                comment: 'that really a sign of peace..',
                                rating: '3 stars',
                                customer_name: 'Sapna Meena',
                                date: '16 feb 2018'
                              },
                              {
                                comment: 'i love theeee bhudha',
                                rating: '4 stars',
                                customer_name: 'Maheep Jangid',
                                date: '16 feb 2018'
                              }
                            ];

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  comments = COMMENT;
  product = PRODUCT[0];


  constructor() { }

  ngOnInit() {
  }

}
