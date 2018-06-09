import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BackendApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendApiProvider {

  private baseAPIUrl: string = null;

  constructor(public http: HttpClient) {
  }

  searchLocations(query: any) {

  }

  searchEvents(query: any) {

  }

}
