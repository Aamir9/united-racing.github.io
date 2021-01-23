import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  marks:string;
  at: string;
  simTime: string;
  length: string;
  type: string;
  laps: string;
  cleanLaps: string;
  fastestLap: string;
  fuelAvg: string;
  trackTemp: string;
  airTemp: string;
  goTo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {marks: "<i class='marks'></i>", at: '4:03.956', simTime: "0", length: 'lorem ipsum', type: '18.3', laps: '18.3', cleanLaps: '37.2', fastestLap: '16 Days ago', fuelAvg: '37.2', trackTemp: '37.2', airTemp: '37.2', goTo: "<a href='/telemetry'>Telemetry</a>"},
  {marks: "<i class='marks'></i>", at: '4:03.956', simTime: "0", length: 'lorem ipsum', type: '18.3', laps: '18.3', cleanLaps: '37.2', fastestLap: '16 Days ago', fuelAvg: '37.2', trackTemp: '37.2', airTemp: '37.2', goTo: "<a href='/telemetry'>Telemetry</a>"},
  {marks: "<i class='snow'></i>", at: '4:03.956', simTime: "0", length: 'lorem ipsum', type: '18.3', laps: '18.3', cleanLaps: '37.2', fastestLap: '16 Days ago', fuelAvg: '37.2', trackTemp: '37.2', airTemp: '37.2', goTo: "<a href='/telemetry'>Telemetry</a>"},
  {marks: "<i class='marks'></i>", at: '4:03.956', simTime: "0", length: 'lorem ipsum', type: '18.3', laps: '18.3', cleanLaps: '37.2', fastestLap: '16 Days ago', fuelAvg: '37.2', trackTemp: '37.2', airTemp: '37.2', goTo: "<a href='/telemetry'>Telemetry</a>"},
  {marks: "<i class='snow'></i>", at: '4:03.956', simTime: "0", length: 'lorem ipsum', type: '18.3', laps: '18.3', cleanLaps: '37.2', fastestLap: '16 Days ago', fuelAvg: '37.2', trackTemp: '37.2', airTemp: '37.2', goTo: "<a href='/telemetry'>Telemetry</a>"},
  
];
@Component({
  selector: 'app-session-pg',
  templateUrl: './session-pg.component.html',
  styleUrls: ['./session-pg.component.scss']
})
export class SessionPgComponent implements OnInit {
  displayedColumns: string[] = ['marks', 'at', 'simTime', 'length', 'type', 'laps', 'cleanLaps', 'fastestLap', 'fuelAvg', 'trackTemp', 'airTemp', 'goTo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
