import { Component, Input, EventEmitter, Output } from "@angular/core";
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
export class MapViewComponent {
  @Input("locations") locations: ILocation[] = [];
  @Input("centerCoords") centerCoords: ICoordinates;

  @Output() onCurrCoordsRequest = new EventEmitter();
  @Output() onLocationClicked = new EventEmitter();

  constructor(private mapManager: MapManagerProvider) {}
}
