import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { TelemetryPgComponent } from './telemetry-pg/telemetry-pg.component';


const routes: Routes = [
  {
    path: "telemetry",
    component: TelemetryPgComponent
  },
  {
    path: "account",
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelemetryRoutingModule { }
