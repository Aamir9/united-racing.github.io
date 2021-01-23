import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StaticRoutingModule } from './static-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

// import components 
import { PricingPgComponent } from './pricing-pg/pricing-pg.component';
import { FaqPgComponent } from './faq-pg/faq-pg.component';
import { SellYourDataComponent } from './sell-your-data/sell-your-data.component';
import { WorldRecordComponent } from './world-record/world-record.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { DownloadComponent } from './download/download.component';
import { TrackPgComponent } from './track-pg/track-pg.component';
import { SessionPgComponent } from './session-pg/session-pg.component';
import { UpacksComponent } from './upacks/upacks.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

// angular martrial component imports
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AddStintToUpackComponent } from './add-stint-to-upack/add-stint-to-upack.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
     PricingPgComponent,
     FaqPgComponent, 
     SellYourDataComponent, 
     WorldRecordComponent, 
     LeaderBoardComponent, 
     DownloadComponent, 
     TrackPgComponent, 
     SessionPgComponent, 
     UpacksComponent, 
     MessageDialogComponent, AddStintToUpackComponent, ContactUsComponent
    ],
  imports: [
    CommonModule,
    StaticRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // Mat Modules Imports
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    
    
  ],
  entryComponents:[
    MessageDialogComponent,
    AddStintToUpackComponent
  ]
})
export class StaticModule { }
