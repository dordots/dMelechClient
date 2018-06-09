import { IEvent } from './../../models/Event';
import { ILocation } from './../../models/Location';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityId } from '../../models/Entity';

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

  createLocation(location: ILocation) {
    return this.http.put<ILocation>(`${this.baseAPIUrl}/locations/create`, location);
  }

  getLocation(locationId: EntityId) {
    return this.http.get<ILocation>(`${this.baseAPIUrl}/locations/${locationId}`);
  }

  updateLocation(location: ILocation) {
    return this.http.post<ILocation>(`${this.baseAPIUrl}/locations/${location.id}/update`, location)
  }

  deleteLocation(locationId: EntityId) {
    return this.http.delete<ILocation>(`${this.baseAPIUrl}/locations/${locationId}/delete`);    
  }

  searchLocations(query: any) {
    return this.http.get<ILocation>(`${this.baseAPIUrl}/locations/search`, query);
  }

  createEvent(event: IEvent) {
    return this.http.put<IEvent>(`${this.baseAPIUrl}/events/create`, event);
  }

  getEvent(eventId: EntityId) {
    return this.http.get<IEvent>(`${this.baseAPIUrl}/events/${eventId}`);
  }

  updateEvent(event: IEvent) {
    return this.http.post<IEvent>(`${this.baseAPIUrl}/events/${event.id}/update`, event);    
  }

  deleteEvent(eventId: EntityId) {
    return this.http.delete<IEvent>(`${this.baseAPIUrl}/events/${eventId}/delete`);    
  }

  searchEvents(query: any) {
    return this.http.get<IEvent>(`${this.baseAPIUrl}/events/search`, query);
  }

}
