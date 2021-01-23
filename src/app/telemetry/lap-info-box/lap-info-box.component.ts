import {  Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lap } from 'src/app/shared/interfaces/lap';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';
import {CommonService} from  '../../shared/services/common.service';


@Component({
  selector: 'app-lap-info-box',
  templateUrl: './lap-info-box.component.html',
  styleUrls: ['./lap-info-box.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class LapInfoBoxComponent implements OnInit {
  @Input() lap;
  @Output() RemoveLapEvent = new EventEmitter<lap>();

  IsLap_2 = false;
  IsLap_3 = false;
  text ="";

  myOptions :any;
  constructor(public dialog?: MatDialog , private commonService?: CommonService) {
    this.text ="</span><p> text <b> InnerHtml </b></p>";
   }

  ngOnInit(): void {
   
    this.myOptions = this.commonService.myOptions;
  }
  

  // video pop up
openVideoDialog(videoUrl){
  this.dialog.open(VideoDialogComponent,{
    data: {
      dataKey: videoUrl
    }});
}

// lap remove on click
LapRemove(){
  this.RemoveLapEvent.emit(this.lap);
}




}
