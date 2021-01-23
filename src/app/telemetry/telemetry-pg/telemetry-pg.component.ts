import {Component, HostListener, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ChartSelectionComponent } from '../chart-selection/chart-selection.component';
import {lap} from '../../shared/interfaces/lap';
import { LapSelectionComponent } from '../lap-selection/lap-selection.component';


@Component({
  selector: 'app-telemetry-pg',
  templateUrl: './telemetry-pg.component.html',
  styleUrls: ['./telemetry-pg.component.scss'],
  
})

export class TelemetryPgComponent implements OnInit {
  step;
  stepRed;
  topHeadingElement;
  sideBarElement;
  bottomSecElement;
  ChartSectionDialogRef: MatDialogRef<ChartSelectionComponent>;
  selectedCharts :any[]=[];
  lapBoxList:lap[] = [{
    lapNo: 1,
    driver: 'Lorem ipsum',
    time: '1:36.476',
    when: '10 Days ago',
    cleanlap: 'yes',
    setupName: 'Porsche 911 GT3 Cup 204226',
    rubber: 'Slight usage',
    videoUrl:'//vjs.zencdn.net/v/oceans.mp4'
  }];
  constructor(public dialog?: MatDialog) { 

  }
  ngOnInit(): void {
     this.topHeadingElement = document.getElementById('topHeading');
     this.sideBarElement = document.getElementById('sideBar');
     this.bottomSecElement = document.getElementById('bottomSec');

  }
  // during scroll set menus and sections on top
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
     if (window.pageYOffset > this.topHeadingElement.offsetTop) {
       this.topHeadingElement.classList.add('sticky');
     }else {
      this.topHeadingElement.classList.remove('sticky');
     }
     if (window.pageYOffset > this.sideBarElement.offsetTop){

      this.sideBarElement.classList.add('stickySideBar');

     }
     if (window.pageYOffset >  this.bottomSecElement.offsetTop){
      this.bottomSecElement.classList.add('stickyTopSec');

     }
     else{
      this.bottomSecElement.classList.remove('stickyTopSec');
      this.sideBarElement.classList.remove('stickySideBar');
     }

     e.stopPropagation();
     e.preventDefault();

}

 // show switch map panel
StintMenu(e){
  
  const element1 = document.getElementById('lapMenu');
      element1.classList.add('displayNone'); 
  const element2 = document.getElementById('lapMenuClear');
    element2.classList.remove('displayNone'); 
  let lapSelection = new LapSelectionComponent();
  lapSelection.lapSelectionShow();
    e.stopPropagation();
     e.preventDefault();

}

//hide switch map panel
StintMenuHide(){
  
  this.StintChnageIcon();
  let lapSelection = new LapSelectionComponent();
  lapSelection.lapSelectionHide();
    
}

StintChnageIcon(){
  const element1 = document.getElementById('lapMenu');
  element1.classList.remove('displayNone'); 

  const element2 = document.getElementById('lapMenuClear');
    element2.classList.add('displayNone');  
}
// open for pop up
openChartDialog(){

  this.ChartSectionDialogRef =  this.dialog.open(ChartSelectionComponent,{
    hasBackdrop: true
  });

  this.ChartSectionDialogRef.afterClosed().subscribe(result => {
     this.selectedCharts = result;
    
})


}


// copy lap 
copyLap(data:lap){
  let hasValue =  this.lapBoxList.find(o => o.lapNo === data.lapNo);
  if(!hasValue){
    this.lapBoxList.push(data);
  }
  
}


// remove lap on
RemoveLap(data:any){
  const index = this.lapBoxList.indexOf(data);
  if (index > -1) {
    this.lapBoxList.splice(index, 1);
  }
}

}



