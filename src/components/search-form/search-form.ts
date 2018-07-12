import { NosachType } from './../../models/Location';
import { ICoordinates } from './../../models/Coordinates';
import { CoordinatesPickerComponent } from './../coordinates-picker/coordinates-picker';
import { ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, ValidationErrors } from '@angular/forms';
import { IAdvancedQuery, } from "./../../interfaces/SearchQueries";
import { Component } from "@angular/core";

// validators
import { Validate as ValidateRadius } from '../../validators/Radius'
import { Validate as ValidateCoordinates } from '../../validators/Coordinates'
import { ValidateArray as ValidateDaysOfWeekArray } from '../../validators/DaysOfWeek'

/**
 * Creating search query by form and emits it on submit.
 */
@Component({
  selector: "search-form",
  templateUrl: "search-form.html"
})
export class SearchFormComponent {

  public query: FormGroup;
  public nosachTypes: NosachType[] = ['תימן', 'עדות המזרח', 'ספרד', 'אשכנז'];
  
  constructor(private formBuilder: FormBuilder,
              public modalCtrl: ModalController) {
    this.query = this.formBuilder.group({
      address: [''],
      coordinates: ['', this.getValidator(ValidateCoordinates, 'invalidCoordinates')],
      days: ['', this.getValidator(ValidateDaysOfWeekArray, 'invalidDaysArray')],
      externals: [''],
      name: [''],
      radius: ['', this.getValidator(ValidateRadius, 'invalidRadius')],
      start: [''],
      end: [''],
      nosach: [''],
    });

    const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    this.query.setValue({
      externals: {},
      days: [1, 2],
      address: '',
      name: '',
      coordinates: {},
      radius: 1,
      start: localISOTime,
      end: localISOTime,
      nosach: ''
    });

  }

  onSubmit() {
    let convertQuery = this.convertQuery();
  }

  convertQuery() {
    if (this.isQueryValid()) {

    }

    return null;
  }

  isQueryValid() {
    return this.query.valid;
  }

  getValidator(Validator: (val) => boolean, errorName: string, orOtherField?: string) {
    return (formControl: FormControl) => {

      const val = formControl.value;
      if (!Validator(val)) {
        if (!orOtherField) {
          return { [errorName]: true };
        }
        else {
        }
      }
      return null;
    }
  }

  onCoordsRequest() {
    let coordsPickerModal = this.modalCtrl.create(CoordinatesPickerComponent, {
      centerCoords: this.query.controls["coordinates"].value
    }, {
      enterAnimation: 'modal-md-slide-in'
    });

    coordsPickerModal.onDidDismiss((coordinates: ICoordinates) => {
      if (coordinates) {
        this.query.controls["coordinates"].setValue(coordinates);
      }
    });
    coordsPickerModal.present();
  }
  
}
