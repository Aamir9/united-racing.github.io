import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { HomePgComponent } from './home-pg/home-pg.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [HomePgComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatButtonModule,
    SharedModule,
    MatTableModule
  ]
})
export class LandingModule { }
