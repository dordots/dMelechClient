import { IMapItem as Item } from './../../interfaces/MapItem';
import GoogleMaps from "google-maps";
import { Injectable, ElementRef, EventEmitter } from "@angular/core";
import { ActionSheetController } from "ionic-angular";
import { ICoordinates } from "../../models/Coordinates";

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

  constructor(public actionSheetCtrl: ActionSheetController) {
    GoogleMaps.KEY = "AIzaSyBCptJVdxT9qytWXFkm4cVfXa6qdDWOncI";
  }

  public createMap(elementRef: ElementRef): Promise<google.maps.Map> {
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
        }
        else {
          resolve(null);
        }
      });
    });
  }

  public setCenterCoords(
    map: google.maps.Map,
    coords: ICoordinates
  ): void {
    if (map && coords) map.panTo(coords);
  }

  public setItems(map: google.maps.Map, items: Item[], eventEmitter: EventEmitter<Item>): void {
    if (map && items) {
      this.removeAllMarkers(map);
      this.addMarkersForItems(map, items, eventEmitter);
    }
  }

  private removeAllMarkers(map: google.maps.Map) {
    while (this.itemsMarkers.length) {
      this.itemsMarkers.pop().setMap(null);
    }
  }

  private addMarkersForItems(map: google.maps.Map, items: Item[], eventEmitter: EventEmitter<Item>) {
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

  // private openItemDisplay = (item: Item) => {
  //   this.actionSheetCtrl
  //     .create({
  //       title: item.name,
  //       buttons: [
  //         {
  //           text: "עדכון"
  //         },
  //         {
  //           text: "ניווט"
  //         }
  //       ]
  //     })
  //     .present();
  // };
}
