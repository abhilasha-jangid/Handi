import { Injectable } from '@angular/core';
import {Artist}  from '../shared/artist';
import { ARTIST } from '../shared/artists';

@Injectable()
export class ArtistService {

  constructor() { }

  getArtists() : Promise<Artist[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(ARTIST), 2000);
    });
  }
  getArtistId(id:number): Promise<Artist>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(ARTIST.filter((artist) => (artist.id === id))[0]), 2000);
    });
  }
  getArtistFeature(): Promise<Artist>{
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(ARTIST.filter((artist) => artist.featured)[0]), 2000);
    });
  }

}
