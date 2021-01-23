import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lap } from 'src/app/shared/interfaces/lap';
import { SessionSelectComponent } from '../session-select/session-select.component';
import { ShareComponent } from '../share/share.component';
import { WatchVideoCompareComponent } from '../watch-video-compare/watch-video-compare.component';




@Component({
  selector: 'app-add-stint-box',
  templateUrl: './add-stint-box.component.html',
  styleUrls: ['./add-stint-box.component.scss']
})
export class AddStintBoxComponent implements OnInit {

  @Input() lap_1;
  isLap_1Copy = false;
  isLap_1CopyDoble = false;
  @Output() newLapEvent = new EventEmitter<lap>(); 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  // open session select  pop up
openSintDialog(){
  this.dialog.open(SessionSelectComponent);
}

// copy first lap box
copyfirstSint(){
  let lap:lap={
    lapNo :2,
    driver : this.lap_1[0].driver,
    cleanlap : this.lap_1[0].cleanlap,
    rubber  :  this.lap_1[0].rubber,
    setupName :  this.lap_1[0].setupName,
    time :   this.lap_1[0].time,
    when  : this.lap_1[0].time,
    videoUrl:this.lap_1[0].videoUrl,
  };
          
 this.newLapEvent.emit(lap);
 const element_2 = document.getElementById('dublicateSint');
 element_2.classList.remove('displayNone');
}

//copy second lap box
copydoubledSint(){
  let lap:lap={
    lapNo :3,
    driver : this.lap_1[0].driver,
    cleanlap : this.lap_1[0].cleanlap,
    rubber  :  this.lap_1[0].rubber,
    setupName :  this.lap_1[0].setupName,
    time :   this.lap_1[0].time,
    when  : this.lap_1[0].time,
    videoUrl:this.lap_1[0].videoUrl,
  };
  this.newLapEvent.emit(lap);
   
}

// share link pop up
openShareLinkDialog(){
  this.dialog.open(ShareComponent);
}




}
