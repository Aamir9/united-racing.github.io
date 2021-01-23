import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  driverName: string;
  track: string;
  car: string;
  lapTime: string;
  longAgo: string;
  record: string;
}
export interface PeriodicElement1 {
  rank: string;
  name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'},
  {driverName: "lorem ipsum", track: 'Hydrogen', car: "ford", lapTime: 'H', longAgo: 'H', record: 'H'}
  
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  {rank: 'Lorem ipsum', name: 'lorem ipsum'},
  {rank: 'Lorem ipsum', name: 'lorem ipsum'},
  {rank: 'Lorem ipsum', name: 'lorem ipsum'},
  {rank: 'Lorem ipsum', name: 'lorem ipsum'},
  {rank: 'Lorem ipsum', name: 'lorem ipsum'}
];
@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.scss']
})
export class HomePgComponent implements OnInit {
  displayedColumns: string[] = ['driverName', 'track', 'car', 'lapTime', 'longAgo', 'record'];
  dataSource = ELEMENT_DATA;
  displayedColumns1: string[] = ['rank', 'name'];
  dataSource1 = ELEMENT_DATA1;
  constructor() { }

  ngOnInit(): void {
  }

}
