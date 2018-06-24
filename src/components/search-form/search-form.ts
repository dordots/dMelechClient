import { Time } from './../../interfaces/Time';
import { DaysOfWeek } from './../../interfaces/DaysOfWeek';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IAdvancedQuery, } from "./../../interfaces/SearchQueries";
import { Component } from "@angular/core";
import { ICoordinates } from "../../models/Coordinates";

// validators
import { ValidateRange as ValidateRadiusRange } from '../../validators/Radius'
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
  public radiusRange = { lower: 5, upper: 20 };
  
  constructor(private formBuilder: FormBuilder) {
    this.query = this.formBuilder.group({
      address: [''],
      coordinates: ['', ValidateCoordinates],
      days: ['', ValidateDaysOfWeekArray],
      externals: [''],
      name: [''],
      radius: ['', ValidateRadiusRange],
      start: [''],
      end: [''],
      range: ['']
    });

    const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    this.query.setValue({
      externals: {},
      days: [],
      address: '',
      name: '',
      coordinates: {},
      radius: [],
      start: localISOTime,
      end: localISOTime,
      range: {}
    });

  }

  onSubmit() {

  }


  onCoordsRequest() {

  }
  
  onDayToggle(day: DaysOfWeek) {
    
  }
  
  onExternalToggle(external: string) {
    
  }
  
  private onCoordinatesRecieved(coords: ICoordinates) {
    if (coords && coords.lat && coords.lng) {
      let centerPropName: keyof Partial<IAdvancedQuery> = "coordinates";
     //this.searchQuery.setValue({ centerPropName: coords }); 
    }
  }
}
