import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-telelemtry-chart',
  templateUrl: './telelemtry-chart.component.html',
  styleUrls: ['./telelemtry-chart.component.scss']
})
export class TelelemtryChartComponent implements OnInit {
  @Input() chartsName:any;
  names:any;
  constructor() { } 

  ngOnInit(): void {
  }

}
