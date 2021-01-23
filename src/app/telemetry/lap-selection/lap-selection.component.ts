import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { TelemetryPgComponent } from '../telemetry-pg/telemetry-pg.component';

@Component({
  selector: 'app-lap-selection',
  templateUrl: './lap-selection.component.html',
  styleUrls: ['./lap-selection.component.scss']
})
export class LapSelectionComponent implements OnInit {
  step;
  stepRed;
  myOptions :any;
  constructor( private commonService?: CommonService) { }

  ngOnInit(): void {
    this.myOptions = this.commonService.myOptions;
  }


  lapSelectionShow(){
    const element = document.getElementById('menuDiv');
      element.classList.remove('displayNone'); 
  }
  //hide switch map panel
  lapSelectionHide(){
  const element = document.getElementById('menuDiv');
      element.classList.add('displayNone');  

  let telemetry = new TelemetryPgComponent();
  telemetry.StintChnageIcon();
  
}

  // hide switch map panel when click outside 
onClickedOutside(e: Event) {
  this.lapSelectionHide();
}

}
