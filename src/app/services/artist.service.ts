import { Injectable } from '@angular/core';
import {Artist}  from '../shared/artist';
import { ARTIST } from '../shared/artists';

@Injectable()
export class ArtistService {

  constructor() { }

  getArtists() : Artist[]{
    return ARTIST;
  }
  getArtistId(id:number): Artist{
    return ARTIST.filter((artist) => (artist.id === id))[0];
  }
  getArtistFeature(): Artist{
    return ARTIST.filter((artist) =>(artist.featured))[0];
  }

}
