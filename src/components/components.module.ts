import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListViewComponent } from './list-view/list-view';
import { MapViewComponent } from './map-view/map-view';
import { MapComponent } from './map/map';
import { SearchFormComponent } from './search-form/search-form';

@NgModule({
	declarations: [MapViewComponent,
    ListViewComponent,
    MapComponent,
    SearchFormComponent],
	imports: [IonicModule],
	exports: [MapViewComponent,
	ListViewComponent,
    MapComponent,
    SearchFormComponent]
})
export class ComponentsModule {}
