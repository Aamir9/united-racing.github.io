import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-map',
  templateUrl: './track-map.component.html',
  styleUrls: ['./track-map.component.scss']
})
export class TrackMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.draw();
  }

  // svg in canvas
draw(){
  const canvas: any  = document.getElementById('canvasSvg');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 20, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 20, 50);
  }
}

}
