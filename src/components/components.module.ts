import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListViewComponent } from './list-view/list-view';
import { MapViewComponent } from './map-view/map-view';
import { MapComponent } from './map/map';

@NgModule({
	declarations: [MapViewComponent,
    ListViewComponent,
    MapComponent],
	imports: [IonicModule],
	exports: [MapViewComponent,
	ListViewComponent,
    MapComponent]
})
export class ComponentsModule {}
