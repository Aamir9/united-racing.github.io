import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  lapTime: string;
  Interval: string;
  Driver: string;
  airTemp: string;
  trackTemp: string;
  at: string;
  goTo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, lapTime: '4:03.956', Interval: "0", Driver: 'lorem ipsum', airTemp: '18.3', trackTemp: '37.2', at: '16 Days ago', goTo: "<a href='' class='telemetry'></a> <a href='' class='steps'></a> <a href='' class='video'></a>"},
  {position: 2, lapTime: '4:03.956', Interval: "0", Driver: 'lorem ipsum', airTemp: '18.3', trackTemp: '37.2', at: '16 Days ago', goTo: "<a href='' class='telemetry'></a> <a href='' class='steps'></a> <a href='' class='video'></a>"},
  {position: 3, lapTime: '4:03.956', Interval: "0", Driver: 'lorem ipsum', airTemp: '18.3', trackTemp: '37.2', at: '16 Days ago', goTo: "<a href='' class='telemetry'></a> <a href='' class='steps'></a> <a href='' class='video'></a>"},
  {position: 4, lapTime: '4:03.956', Interval: "0", Driver: 'lorem ipsum', airTemp: '18.3', trackTemp: '37.2', at: '16 Days ago', goTo: "<a href='' class='telemetry'></a> <a href='' class='steps'></a> <a href='' class='video'></a>"},
  {position: 5, lapTime: '4:03.956', Interval: "0", Driver: 'lorem ipsum', airTemp: '18.3', trackTemp: '37.2', at: '16 Days ago', goTo: "<a href='' class='telemetry'></a> <a href='' class='steps'></a> <a href='' class='video'></a>"}
];
@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'lapTime', 'Interval', 'Driver', 'airTemp', 'trackTemp', 'at', 'goTo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
