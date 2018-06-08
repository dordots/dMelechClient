import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output
} from "@angular/core";
import * as GoogleMaps from "google-maps";
import GoogleMapsLoader from "google-maps";
import { ILocation } from "../../models/Location";
import { ICoordinates } from "../../models/Coordinates";
import { ActionSheetController } from "ionic-angular";

/**
 * A map containing and managing component.
 */
@Component({
  selector: "map",
  templateUrl: "map.html"
})
export class MapComponent implements OnInit, OnChanges {
  @Input("locations") locations: ILocation[] = [];
  @Input("centerCoordinates") centerCoordinates: ICoordinates;

  @Output() onCurrentPositionRequest = new EventEmitter();

  @ViewChild("map") mapElement: ElementRef;

  private _googleAPI: GoogleMaps.google;

  get googleAPI() {
    let googleAPIPromise: Promise<GoogleMaps.google> = new Promise(
      (resolve, reject) => {
        if (!this._googleAPI) {
          GoogleMaps.load(googleAPI => {
            this._googleAPI = googleAPI;
            resolve(this._googleAPI);
          });
        }
        else resolve(this._googleAPI);
      }
    );

    return googleAPIPromise;
  }

  private _map: google.maps.Map;

  get map() {
    let mapPromise: Promise<google.maps.Map> = new Promise(
      (resolve, reject) => {
        if (!this._map) {
          this.googleAPI.then(googleAPI => {
            let mapOptions: google.maps.MapOptions = {
              center: this.centerCoordinates,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.TERRAIN,
              disableDefaultUI: true
            };
            this._map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            resolve(this.map);
          });
        }
        else resolve(this._map);
      }
    );

    return mapPromise;
  }

  markers: google.maps.Marker[] = [];
  googleMapsAPI: GoogleMaps.google;

  constructor(public actionSheetCtrl: ActionSheetController) {
    GoogleMapsLoader.KEY = "AIzaSyBCptJVdxT9qytWXFkm4cVfXa6qdDWOncI";
  }

  ngOnInit() {
    this.displayCurentObjects();
    this.goToPosition(this.centerCoordinates);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["locations"] && !changes["locations"].firstChange) {
      this.displayCurentObjects();
    }

    if (changes["centerPosition"] && changes["centerPosition"].currentValue) {
      this.goToPosition(this.centerCoordinates);
    }
  }

  private getCurrentPosition() {
    this.onCurrentPositionRequest.emit();
  }

  private goToPosition(pos: ICoordinates) {
    if (pos) {
      this.map.then(map => map.panTo(pos));
    }
  }

  private displayCurentObjects() {
    this.removeAllMarkers();
    this.setMarkersForObjects();
  }

  setMarkersForObjects() {
    this.map.then(map => {
      this.googleAPI.then(googleAPI => {
        this.locations.forEach(location => {
          let marker = new google.maps.Marker({
            icon: `assets/imgs/${location.type}.png`,
            position: location.coordinates,
            map
          });
          marker.addListener("click", () => {
            this.openLocationDisplay(location);
          });
          this.markers.push(marker);
        });
      });
    });
  }

  openLocationDisplay = (location: ILocation) => {
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

  removeAllMarkers() {
    this.setMapOnAllMarkers(null);
    this.markers = [];
  }

  setMapOnAllMarkers(map: google.maps.Map) {
    this.map.then(map => {
      this.markers.forEach(marker => {
        marker.setMap(map);
      });
    })
  }
}
