import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {sim} from '../../shared/interfaces/sim';
import {upack, UpacksBySim} from '../../shared/interfaces/upack';
import { AddStintToUpackComponent } from '../add-stint-to-upack/add-stint-to-upack.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-upacks',
  templateUrl: './upacks.component.html',
  styleUrls: ['./upacks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpacksComponent implements OnInit {
  simDropdownDataCreate:sim[]=[];
  
  displayedColumns: string[] = ['name', 'by', 'cars', 'tracks', 'laps', 'setups', 'subs', 'price','goto','visibility','addIcon'];
  simDropdownData: sim[] = [
    {value: 1, viewValue: 'iRacing'},
    {value: 2, viewValue: 'Assetto Corsa'},
    {value: 3, viewValue: 'Assetto Corsa Competizione'},
    {value: 4, viewValue: 'Assetto Corsa Competizione'}
  ];

  AddUpackBySim:UpacksBySim[] =[];
  AddUpack:upack= {};
  selectedDropdownInCreate;
  selectedVal: any;
  tableDataSource:any[]= [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.simDropdownDataCreate.push();
  }

  // create or add new upack
  upackSave(){
    this.AddUpack.isSupported = true;
    this.AddUpack.price = 0;
    this.AddUpackBySim.push({
      simValue: this.selectedDropdownInCreate,
      upacks:[],
    }); 
    let index =  this.AddUpackBySim.findIndex(o => o.simValue === this.selectedDropdownInCreate);
    this.AddUpackBySim[index].upacks.push(this.AddUpack);
    this.AddUpack ={};
    this.openMessageDialog();

  }

  // click to dropdown than search upack by sim value
  onSearchDropdownChange(){
  this.selectedVal;
  let data =  this.AddUpackBySim.find(o => o.simValue === this.selectedVal);
  if(data){
    this.tableDataSource = data.upacks;
  }
  else{
    this.tableDataSource = [];
  }
}

// open save dialong
openMessageDialog(){
  this.dialog.open(MessageDialogComponent,{
    data: {
      message: 'UPack Created',
      content:'You have created a new UPack. You can add stints to it'
    }});
}

openAddStintDialog(){
  
  this.dialog.open(AddStintToUpackComponent);
}
}
