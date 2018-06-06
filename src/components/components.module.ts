import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MapComponent } from './map/map';
import { ListViewComponent } from './list-view/list-view';

@NgModule({
	declarations: [MapComponent,
    ListViewComponent],
	imports: [IonicModule],
	exports: [MapComponent,
    ListViewComponent]
})
export class ComponentsModule {}
