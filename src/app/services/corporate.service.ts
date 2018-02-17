import { Injectable } from '@angular/core';
import { Corporate } from '../shared/corporate';
import { CORPORATE } from '../shared/corporates';

@Injectable()
export class CorporateService {

  constructor() { }

  getCorporation() : Corporate[]{
    return CORPORATE;
  }
}
