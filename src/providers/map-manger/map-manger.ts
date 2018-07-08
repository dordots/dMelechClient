import { IMapItem as Item } from "./../../interfaces/MapItem";
import GoogleMaps from "google-maps";
import { Injectable, ElementRef, EventEmitter } from "@angular/core";
import { ICoordinates } from "../../models/Coordinates";
import { IMap } from "../../interfaces/Map";

/*
  Creating and managing maps.
*/
@Injectable()
export class MapManagerProvider {
  map: google.maps.Map;
  placesService: google.maps.places.PlacesService;
  autocompleteService: google.maps.places.AutocompleteService; 
  private itemsMarkers: google.maps.Marker[] = [];
  

  private get googleAPI() {
    let googleAPIPromise: Promise<GoogleMaps.google> = new Promise(
      (resolve, reject) => {
        if (!this._googleAPI) {
          GoogleMaps.load(googleAPI => {
            this._googleAPI = googleAPI;
            resolve(this._googleAPI);
          });
        } else resolve(this._googleAPI);
      }
    );

    return googleAPIPromise;
  }
  private _googleAPI: GoogleMaps.google;

  constructor() {
    GoogleMaps.KEY = "AIzaSyBCptJVdxT9qytWXFkm4cVfXa6qdDWOncI";
    GoogleMaps.LIBRARIES = ["places"];
  }

  public createMap(elementRef: ElementRef): Promise<IMap> {
    return new Promise((resolve, reject) => {
      this.googleAPI.then(googleAPI => {
        let mapOptions: google.maps.MapOptions = {
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
          disableDefaultUI: true,
          center: { lat: 31.776725, lng: 35.234514 }
        };
        if (elementRef.nativeElement.childElementCount == 0) {
          this.map = new google.maps.Map(elementRef.nativeElement, mapOptions);
          this.placesService = new google.maps.places.PlacesService(this.map);
          resolve(this.map);
        } else {
          resolve(null);
        }
      });
    });
  }

  public setOnClickListener(map: IMap, eventEmitter: EventEmitter<ICoordinates>) {
    map.addListener("click", (e: google.maps.MouseEvent) => {
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();
      eventEmitter.emit({ lat, lng });
    });
  }

  public setMapOptions(map: IMap, options: IMapOptions) {
    if (map && options) {
      let cursorCSS: keyof IMapOptions = "cursorCSS";
      if (options[cursorCSS]) map.setOptions({draggableCursor: options[cursorCSS]});
      else map.setOptions({draggableCursor: null});
    }
  }

  public setCenterCoords(map: google.maps.Map, coords: ICoordinates): void {
    if (map && coords) map.panTo(coords);
  }

  public setItems(map: IMap, items: Item[], eventEmitter: EventEmitter<Item>): void {
    if (map && items) {
      this.removeAllMarkers(map);
      this.addMarkersForItems(map, items, eventEmitter);
    }
  }

  private removeAllMarkers(map: IMap) {
    while (this.itemsMarkers.length) {
      this.itemsMarkers.pop().setMap(null);
    }
  }

  private addMarkersForItems(map: IMap, items: Item[], eventEmitter: EventEmitter<Item>) {
    this.googleAPI.then(googleAPI => {
      items.filter(item => item.coordinates).forEach(item => {
        let marker = new google.maps.Marker({
          icon: item.type ? `assets/imgs/${item.type}.png` : undefined,
          position: item.coordinates,
          map
        });
        marker.addListener("click", () => {
          eventEmitter.emit(item);
        });
        this.itemsMarkers.push(marker);
      });
    });
  }

  public searchPlace(searchString: string, callBack: any) {
    if(!this.autocompleteService){
      this.autocompleteService = new google.maps.places.AutocompleteService();
    }
    let req :google.maps.places.AutocompletionRequest = {input : searchString};
    this.autocompleteService.getPlacePredictions(req, callBack);
  }

  public setLocation(place: google.maps.places.AutocompletePrediction){
    let req: google.maps.places.PlaceDetailsRequest = {placeId: place.place_id};
    this.placesService.getDetails(req, (place: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setCenterCoords(this.map, place.geometry.location);        
      }
    });
  }
}

export interface IMapOptions {
  cursorCSS?: 'default' | 'crosshair';
}
