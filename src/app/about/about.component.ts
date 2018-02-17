import { Component, OnInit } from '@angular/core';
import {Corporate } from '../shared/corporate';
import { CorporateService } from '../services/corporate.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  corporates: Corporate[];
  corporate: Corporate;
  constructor(private corporateService:CorporateService) { }

  ngOnInit() {

    this.corporates= this.corporateService.getCorporation();
  }

}
