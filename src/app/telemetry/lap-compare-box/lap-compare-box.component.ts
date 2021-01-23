import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WatchVideoCompareComponent } from '../watch-video-compare/watch-video-compare.component';

@Component({
  selector: 'app-lap-compare-box',
  templateUrl: './lap-compare-box.component.html',
  styleUrls: ['./lap-compare-box.component.scss']
})
export class LapCompareBoxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // share link pop up
openWatchVideoCompareDialog(){
  this.dialog.open(WatchVideoCompareComponent);
}
}
