import { Component, OnInit } from '@angular/core';
import videojs  from 'video.js';
@Component({
  selector: 'app-watch-video-compare',
  templateUrl: './watch-video-compare.component.html',
  styleUrls: ['./watch-video-compare.component.scss']
})
export class WatchVideoCompareComponent implements OnInit {
  player: any ;
  player_2: any ;
  videoLink  = '//vjs.zencdn.net/v/oceans.mp4';
  videoLink_2  = '//vjs.zencdn.net/v/oceans.mp4';
  isMuted = false;
  constructor() {  }

  ngOnInit(): void {
     this.readyVideoes();
  }

ngAfterViewInit(){
    
  
}

// video intialization or video ready
readyVideoes(){
  this.player = videojs(document.getElementById('video-player'), {
    sources: {
      src: this.videoLink,
      type: "video/mp4"
    },
   }, function onPlayerReady() { });
   this.player_2 = videojs(document.getElementById('video-player_2'), {
    sources: {
      src: this.videoLink_2,
      type: "video/mp4"
    },
}, function onPlayerReady() { });
}
  playBoth(){
    this.player.play();
    this.player_2.play();
  }
  pauseBoth(){
    this.player.pause();
    this.player_2.pause();
  }
  stopBoth(){
    this.player.pause();
    this.player_2.pause();
    this.player.currentTime(0); 
    this.player_2.currentTime(0);; 
  }
 // toggle Munte/Unmute
  mutedOrNotMuted(){

    if(!this.isMuted){
      this.player.muted(true);
      this.player_2.muted(true);
      this.isMuted= true;
    }
    else{
      this.player.muted(false);
      this.player_2.muted(false);
      this.isMuted= false;
    }
  }
}
