import { NgModule } from '@angular/core';

// @ts-ignore
import { SharedModule } from '@shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, ProtectedRoutingModule],
})
export class ProtectedModule {}
