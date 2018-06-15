import { SearchPage } from './../pages/search/search';
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationTrackProvider } from '../providers/location-track/location-track';
import { DatesToStringProvider } from '../providers/dates-to-string/dates-to-string';
import { ToastProvider } from '../providers/toast/toast';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';
import { MapManagerProvider } from '../providers/map-manger/map-manger';
import { NgxLogglyModule } from 'ngx-loggly-logger';
import { BackendApiProvider } from '../providers/backend-api/backend-api';
import { LoggingProvider } from '../providers/logging/logging';
import { AddPage } from '../pages/add/add';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    NgxLogglyModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackProvider,
    DatesToStringProvider,
    ToastProvider,
    ErrorHandlerProvider,
    MapManagerProvider,
    BackendApiProvider,
    LoggingProvider
  ]
})
export class AppModule {}
