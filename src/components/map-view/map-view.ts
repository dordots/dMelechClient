import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output
} from "@angular/core";
import { ILocation } from "../../models/Location";
import { ICoordinates } from "../../models/Coordinates";
import { MapManagerProvider } from "../../providers/map-manger/map-manger";

/**
 * A map containing and managing component.
 */
@Component({
  selector: "map-view",
  templateUrl: "map-view.html"
})
export class MapViewComponent implements OnChanges {
  @Input("locations") locations: ILocation[] = [];
  @Input("centerCoordinates") centerCoordinates: ICoordinates;

  @Output() onCurrentPositionRequest = new EventEmitter();

  @ViewChild("map") mapElement: ElementRef;

  private _map: google.maps.Map;
  get map() {
    if (this._map) return Promise.resolve(this._map);
    return this.mapManager.createMap(this.mapElement).then(map => {
      this._map = this._map || map; // avoid recreating map
      return this._map;
    })
  };

  constructor(private mapManager: MapManagerProvider) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["locations"])
      this.setLocations();

    if (changes["centerCoordinates"])
      this.goToCoordinates();
  }

  private goToCoordinates(coords? : ICoordinates) {
    if (coords || this.centerCoordinates) // first go to given coords, otherwise to input coordinates
      this.map.then(map => this.mapManager.setCenterCoordinates(map, coords || this.centerCoordinates));
  }

  private setLocations() {
    if (this.locations)
      this.map.then(map => this.mapManager.setLocations(map, this.locations));
  }

  private getCurrentPosition() {
    this.onCurrentPositionRequest.emit();
  }
}
