import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { ListViewComponent } from './list-view/list-view';
@NgModule({
	declarations: [MapComponent,
    ListViewComponent],
	imports: [],
	exports: [MapComponent,
    ListViewComponent]
})
export class ComponentsModule {}
