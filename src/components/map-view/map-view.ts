import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
  AfterViewInit
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
export class MapViewComponent {
  @Input("locations") locations: ILocation[] = [];
  @Input("centerCoords") centerCoordinates: ICoordinates;

  @Output() onCurrCoordsRequest = new EventEmitter();
  @Output() onItemClicked = new EventEmitter();

  constructor(private mapManager: MapManagerProvider) {
  }
  
}
