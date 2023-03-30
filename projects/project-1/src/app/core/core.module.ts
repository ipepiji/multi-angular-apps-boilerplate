import { NgModule, ErrorHandler, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { FourOhFourComponent, OneColumnLayoutComponent } from './components';
import { throwIfAlreadyLoaded } from './guards';
import { GlobalErrorHandler } from './handlers';
import { HttpErrorInterceptor, HttpTokenInterceptor } from './interceptors';
import { AuthService, LoaderService, LocalStorageService } from './services';
import { RouteReusableStrategy } from './strategies';

//  Declarations
const COMPONENTS = [FourOhFourComponent, OneColumnLayoutComponent];

//  Imports
const MODULES = [CommonModule, HttpClientModule];

//  Providers
const HANDLERS = [
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
];

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
];

const SERVICES = [AuthService, LoaderService, LocalStorageService];

const STRATEGIES = [
  {
    provide: RouteReuseStrategy,
    useClass: RouteReusableStrategy,
  },
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  providers: [...HANDLERS, ...INTERCEPTORS, ...SERVICES, ...STRATEGIES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
