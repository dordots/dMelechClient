import { DaysOfWeek } from './../../models/Event';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAdvancedQuery, } from "./../../interfaces/SearchQueries";
import { Component } from "@angular/core";
import { ICoordinates } from "../../models/Coordinates";

// validators
import { ValidateRange as ValidateTimeRange } from '../../validators/Time'
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

  private query: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.query = this.formBuilder.group({
      address: [''],
      coordinates: ['', ValidateCoordinates],
      days: ['', ValidateDaysOfWeekArray],
      externals: [''],
      name: [''],
      time: ['', ValidateTimeRange],
    } as { [key in keyof IAdvancedQuery]: any[''] });
  }

  onSubmit() {

  }

  onCoordinatesRecieved(coords: ICoordinates) {
    if (coords && coords.lat && coords.lng) {
      let centerPropName: keyof Partial<IAdvancedQuery> = "coordinates";
     //this.searchQuery.setValue({ centerPropName: coords }); 
    }
  }

  onDayToggle(day: DaysOfWeek) {

  }

  onExternalToggle(external: string) {
    
  }

}
