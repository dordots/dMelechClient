import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './add';
import { AddMinyanComponent } from '../../components/add-minyan/add-minyan';

@NgModule({
  declarations: [
    AddPage,AddMinyanComponent
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
  ],
  entryComponents: [AddMinyanComponent]
})
export class AddPageModule {}
