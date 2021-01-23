import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren:()=>import("./landing/landing.module").then(m=>m.LandingModule)
  },
  {
    path: "",
    loadChildren:()=>import("./static/static.module").then(m=>m.StaticModule)
  },
  {
    path: "",
    loadChildren:()=>import("./telemetry/telemetry.module").then(m=>m.TelemetryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
