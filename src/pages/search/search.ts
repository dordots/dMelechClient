import { MainPage } from './../../../ionicExamples/src/pages/index';
import { IAdvancedQuery } from './../../interfaces/SearchQueries';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Search occurs in this page.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    
  }

  onSearchSubmit(searchQuery: IAdvancedQuery) {
    this.navCtrl.push(MainPage, { searchQuery });
  }
}
