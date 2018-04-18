import { Injectable } from '@angular/core';
import {Artist}  from '../shared/artist';
import { ARTIST } from '../shared/artists';
import { Component, OnInit, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ArtistService {

  constructor() { }

  getArtists() : Observable<Artist[]>{
    return Observable.of(ARTIST).delay(2000);
  }

  getArtistId(id:number): Observable<Artist>{
    return Observable.of(ARTIST.filter((artist) => (artist.id === id))[0]).delay(2000);
  }

  getArtistFeature(): Observable<Artist>{
    return  Observable.of(ARTIST.filter((artist) => artist.featured)[0]).delay(2000);
  }

}
