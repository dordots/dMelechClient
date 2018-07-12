import { ILocation } from './../../models/Location';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityId } from '../../models/Entity';
import { IAdvancedQuery } from '../../interfaces/SearchQueries';

/*
  Handling communication with the server.
*/
@Injectable()
export class BackendApiProvider {

  private baseAPIUrl: string = null;

  constructor(public http: HttpClient) {
  }

  createLocation(location: ILocation) {
    return this.http.post<ILocation>(`${this.baseAPIUrl}/locations`, location);
  }

  getLocation(locationId: EntityId) {
    return this.http.get<ILocation>(`${this.baseAPIUrl}/locations/${locationId}`);
  }

  updateLocation(location: ILocation) {
    return this.http.put<ILocation>(`${this.baseAPIUrl}/locations/${location.id}`, location)
  }

  deleteLocation(locationId: EntityId) {
    return this.http.delete<ILocation>(`${this.baseAPIUrl}/locations/${locationId}`);    
  }

  search(query: IAdvancedQuery) {
    return this.http.get<ILocation[]>(`${this.baseAPIUrl}/locations/search`, {
      params: {
        filter: JSON.stringify(query)
      }
    });
  }

}
