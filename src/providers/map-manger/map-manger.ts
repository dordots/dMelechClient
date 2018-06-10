import { ILocation } from "./../../models/Location";
import GoogleMaps from "google-maps";
import { Injectable, ElementRef } from "@angular/core";
import { ActionSheetController } from "ionic-angular";
import { ICoordinates } from "../../models/Coordinates";

/*
  Creating and managing maps.
*/
@Injectable()
export class MapManagerProvider {
  private locationsMarkers: google.maps.Marker[] = [];

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

  public setCenterCoordinates(
    map: google.maps.Map,
    coords: ICoordinates
  ): void {
    if (map && coords) map.panTo(coords);
  }

  public setLocations(map: google.maps.Map, locations: ILocation[]): void {
    if (map && locations) {
      this.removeAllMarkers(map);
      this.addMarkersForLocations(map, locations);
    }
  }

  private removeAllMarkers(map: google.maps.Map) {
    while (this.locationsMarkers.length) {
      this.locationsMarkers.pop().setMap(null);
    }
  }

  private addMarkersForLocations(map: google.maps.Map, locations: ILocation[]) {
    this.googleAPI.then(googleAPI => {
      locations.forEach(location => {
        let marker = new google.maps.Marker({
          icon: `assets/imgs/${location.type}.png`,
          position: location.coordinates,
          map
        });
        marker.addListener("click", () => {
          this.openLocationDisplay(location);
        });
        this.locationsMarkers.push(marker);
      });
    });
  }

  private openLocationDisplay = (location: ILocation) => {
    this.actionSheetCtrl
      .create({
        title: location.name,
        buttons: [
          {
            text: "עדכון"
          },
          {
            text: "ניווט"
          }
        ]
      })
      .present();
  };
}
