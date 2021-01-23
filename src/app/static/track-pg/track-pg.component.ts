import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  icon: string;
  trackPosition: string;
  track: string;
  car: string;
  lastDriven: string;
  bestLap: string;
  timeDriven: string;
  session: string;
  laps: string;
  cleanLaps: string;
  goTo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {icon: "<i class='icon1'></i>", trackPosition: "<i class='trackPosition1'></i>", track: '4:03.956', car: "0", lastDriven: 'lorem ipsum', bestLap: '18.3', timeDriven: '37.2', session: '16 Days ago', laps: '37.2', cleanLaps: '37.2', goTo: "<a href='/session'>Sessions</a>"},
  {icon: "<i class='icon2'></i>", trackPosition: "<i class='trackPosition2'></i>", track: '4:03.956', car: "0", lastDriven: 'lorem ipsum', bestLap: '18.3', timeDriven: '37.2', session: '16 Days ago', laps: '37.2', cleanLaps: '37.2', goTo: "<a href='/session'>Sessions</a>"},
  {icon: "<i class='icon3'></i>", trackPosition: "<i class='trackPosition1'></i>", track: '4:03.956', car: "0", lastDriven: 'lorem ipsum', bestLap: '18.3', timeDriven: '37.2', session: '16 Days ago', laps: '37.2', cleanLaps: '37.2', goTo: "<a href='/session'>Sessions</a>"},
  {icon: "<i class='icon1'></i>", trackPosition: "<i class='trackPosition2'></i>", track: '4:03.956', car: "0", lastDriven: 'lorem ipsum', bestLap: '18.3', timeDriven: '37.2', session: '16 Days ago', laps: '37.2', cleanLaps: '37.2', goTo: "<a href='/session'>Sessions</a>"},
  {icon: "<i class='icon2'></i>", trackPosition: "<i class='trackPosition2'></i>", track: '4:03.956', car: "0", lastDriven: 'lorem ipsum', bestLap: '18.3', timeDriven: '37.2', session: '16 Days ago', laps: '37.2', cleanLaps: '37.2', goTo: "<a href='/session'>Sessions</a>"},
  
];
@Component({
  selector: 'app-track-pg',
  templateUrl: './track-pg.component.html',
  styleUrls: ['./track-pg.component.scss']
})
export class TrackPgComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'trackPosition', 'track', 'car', 'lastDriven', 'bestLap', 'timeDriven', 'session', 'laps', 'cleanLaps', 'goTo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
