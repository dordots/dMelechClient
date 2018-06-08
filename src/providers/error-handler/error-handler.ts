
import { Injectable } from '@angular/core';
import { ToastProvider } from '../toast/toast';

/*
  Generated class for the ErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorHandlerProvider {

  constructor(private toast: ToastProvider) {
  }

  error(err: Error): void;
  error(errorMessage: string): void;
  error(err: string & Error) {
    if (typeof err === 'string') {
      this.toast.showToast(err);
    }
    else {
      this.toast.showToast(err.message);
    }
  }
}
