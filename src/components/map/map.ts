import { IMapItem } from './../../interfaces/MapItem';
import { Component, Output, EventEmitter, Input, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { ICoordinates } from '../../models/Coordinates';
import { IMap } from '../../interfaces/Map';
import { MapManagerProvider } from '../../providers/map-manger/map-manger';

/**
 * Components that contains map,
 * displays recieved objects
 * and throws some map events.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent<T extends IMapItem> {

  @Output() onCurrCoordsRequest = new EventEmitter();
  @Output() onItemClicked = new EventEmitter<T>();
  @Output() onMapClicked = new EventEmitter<ICoordinates>();

  @Input("items") items: T[] = [];
  @Input("centerCoords") centerCoords: ICoordinates;
  
  @ViewChild("mapElement") mapElement: ElementRef;

  // The map instance
  private _map: IMap = null;
  get map() {
    if (this._map) return Promise.resolve(this._map);
    return this.mapManager.createMap(this.mapElement).then(map => {
      this._map = this._map || map; // avoid recreating map
      return this._map;
    })
  };

  constructor(private mapManager: MapManagerProvider) {
  }


  ngAfterViewInit() {
    this.map.then(map => this.mapManager.setOnClickListener(map, this.onMapClicked))
    
    if (!this.centerCoords) {
      // Temple mount fallback start point
      this.goToCoordinates({ lat: 31.778139, lng: 35.235987 });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    let itemPropName: keyof MapComponent<T> = "items";
    if (changes[itemPropName])
      this.setItems();
    
    let centerCoordsPropName: keyof MapComponent<T> = "centerCoords";
    if (changes[centerCoordsPropName])
      this.goToCoordinates();
  }

  private goToCoordinates(coords? : ICoordinates) {
    if (coords || this.centerCoords) // first go to given coords, otherwise to input coordinates
      this.map.then(map => this.mapManager.setCenterCoords(map, coords || this.centerCoords));
  }

  private setItems() {
    if (this.items)
      this.map.then(map => this.mapManager.setItems(map, this.items, this.onItemClicked));
  }
  
}
