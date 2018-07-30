import { Injectable } from '@angular/core';
import {Artist}  from '../shared/artist';
import { ARTIST } from '../shared/artists';
import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ArtistService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService,
    private restangular: Restangular) { }

  getArtists() : Observable<Artist[]>{
    return Observable.of(ARTIST).delay(2000);
  }

  getArtistId(id:number): Observable<Artist>{
    return Observable.of(ARTIST.filter((artist) => (artist.id === id))[0]).delay(2000);
  }

  getArtistFeature(): Observable<Artist>{
    return this.http.get(baseURL + 'artist/artist?featured=true')
    .map(res=>{
       return this.processHTTPMsgService.extractData(res)[0];
  })
  .catch(error => { 
    console.log("hey i anm there...error")
    return this.processHTTPMsgService.handleError(error); });
  }
}
