import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import videojs  from 'video.js';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoDialogComponent implements OnInit {
   player: any ;
  constructor(@Inject(MAT_DIALOG_DATA) public videoUrl:any) { 

  }
 
  ngOnInit(): void { 
  
   }
  
    ngAfterViewInit (){
      this.player = videojs(document.getElementById('video-player'), {
        sources: {
          src: this.videoUrl.dataKey,
          type: "video/mp4"
        },
       }, function onPlayerReady() { });
    }
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }


}
