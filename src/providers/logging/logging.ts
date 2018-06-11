import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogglyService } from 'ngx-loggly-logger';

interface logDetails {
  type?: string;
  action?: string;
  info?: string;
  string? : string;
  [key: string]: string;
}
/*
  This service is for logging service.
*/
@Injectable()
export class LoggingProvider {

  constructor(private _logglyService: LogglyService) {
    this._logglyService.push({
      logglyKey: '254fa38f-f381-47b6-afa4-776e5f61f1f2',
      sendConsoleErrors : true,
      tag : 'jewishAppLogging'
  });
}

  info( details: logDetails){
    details.type = 'info';
    this._logglyService.push(JSON);
  }

  warning(details: logDetails){
    details.type = 'warning';
    this._logglyService.push(JSON);
  }
  
  error(details: logDetails){
    details.type = 'error';
    this._logglyService.push(JSON);
  }
}
