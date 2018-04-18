import { Injectable } from '@angular/core';
import { Corporate } from '../shared/corporate';
import { CORPORATE } from '../shared/corporates';
import { Component, OnInit, Inject } from '@angular/core';

@Injectable()
export class CorporateService {

  constructor() { }

  getCorporation() : Corporate[]{
    return CORPORATE;
  }
}
