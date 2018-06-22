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
          resolve(new google.maps.Map(elementRef.nativeElement, mapOptions));
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
      items.forEach(item => {
        let marker = new google.maps.Marker({
          icon: `assets/imgs/${item.type}.png`,
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
}

export interface IMapOptions {
  cursorCSS?: 'default' | 'crosshair';
}
