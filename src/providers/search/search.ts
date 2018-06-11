import { ILocationsQuery, IEventsQuery } from './../../interfaces/SearchQueries';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Handling search queries.
*/
@Injectable()
export class SearchProvider {

  constructor() {
  }

  searchLocations(query: ILocationsQuery) {

  }

  searchEvents(query: IEventsQuery) {
    
  }

}