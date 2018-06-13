import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListViewComponent } from './list-view/list-view';
import { MapViewComponent } from './map-view/map-view';

@NgModule({
	declarations: [MapViewComponent,
    ListViewComponent],
	imports: [IonicModule],
	exports: [MapViewComponent,
	ListViewComponent]
})
export class ComponentsModule {}
