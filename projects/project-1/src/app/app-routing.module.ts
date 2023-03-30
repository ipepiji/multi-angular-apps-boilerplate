import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FourOhFourComponent } from '@core/components/four-oh-four/four-oh-four.component';
import { AuthGuard, GuestGuard } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [GuestGuard],
    loadChildren: () =>
      import('@features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  {
    path: '404',
    component: FourOhFourComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
