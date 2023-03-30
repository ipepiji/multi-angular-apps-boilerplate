import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// @ts-ignore
import { environment } from '@env/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      // Server error happened
      this.handleServerError(error);
    } else {
      // Client Error Happend
      this.handleClientError(error);
    }
  }

  // Customize the default server error handler here if needed
  private handleServerError(error: HttpErrorResponse): void {
    if (!navigator.onLine) {
      // No Internet connection
      alert('No Internet Connection');
    }

    if (!environment.production) {
      // Http Error
      // Show notification to the user
      console.error('Request error', error);
      alert(`${error.status} - ${error.message}`);
    }
  }

  private handleClientError(error: Error): void {
    console.error(error);
  }
}
