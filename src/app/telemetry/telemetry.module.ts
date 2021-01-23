import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { TelemetryRoutingModule } from './telemetry-routing.module';
import { TelemetryPgComponent } from './telemetry-pg/telemetry-pg.component';
import {SharedModule} from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import { ClickOutsideModule } from 'ng-click-outside';
import { ShareComponent } from './share/share.component';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import {ChartsModule} from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { TelelemtryChartComponent } from './telelemtry-chart/telelemtry-chart.component';
import { TelelemtryChartsComponent } from './telelemtry-charts/telelemtry-charts.component';
import { SectorsBarComponent } from './sectors-bar/sectors-bar.component';
import { LapCompareBoxComponent } from './lap-compare-box/lap-compare-box.component';
import { TrackMapComponent } from './track-map/track-map.component';
import { SessionSelectComponent } from './session-select/session-select.component';
import { ChartSelectionComponent } from './chart-selection/chart-selection.component';
import { LapInfoBoxComponent } from './lap-info-box/lap-info-box.component';
import { WatchVideoCompareComponent } from './watch-video-compare/watch-video-compare.component';
import {AddStintBoxComponent} from './add-stint-box/add-stint-box.component';
import { LapSelectionComponent } from './lap-selection/lap-selection.component';
import { AccountComponent } from './account/account.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TooltipModule } from 'ng2-tooltip-directive';
import { CommonService } from '../shared/services/common.service';
import {MatIconModule} from '@angular/material/icon';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    TelemetryPgComponent,
     ShareComponent, 
     VideoDialogComponent, 
     TelelemtryChartComponent, 
     TelelemtryChartsComponent, 
     SectorsBarComponent, 
     LapCompareBoxComponent, 
     TrackMapComponent, 
     SessionSelectComponent, 
     ChartSelectionComponent, 
     LapInfoBoxComponent, 
     WatchVideoCompareComponent,
     AddStintBoxComponent,
     LapSelectionComponent,
     AccountComponent,
     InfoDialogComponent,
    ],

  entryComponents: [
    ShareComponent,
    VideoDialogComponent,
    SessionSelectComponent
  ],
  imports: [
    CommonModule,
    TelemetryRoutingModule,
    MatListModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    DragDropModule,
    MatInputModule,
    ClickOutsideModule,
    ChartsModule,
    MatCardModule,
    CommonModule,
    PlotlyModule,
    MatTabsModule,
    TooltipModule,
    MatIconModule,
    AutocompleteLibModule
     
  
  ],
  providers: [CommonService]
})
export class TelemetryModule { }
