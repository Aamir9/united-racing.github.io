import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chart-selection',
  templateUrl: './chart-selection.component.html',
  styleUrls: ['./chart-selection.component.scss']
})
export class ChartSelectionComponent implements OnInit {
  // onAdd = new EventEmitter();
  ItemList = [];
  colorActive ="primary";
  colorDeactive="white";
  lap_1= {
    lapNo: 1,
    driver: 'Lorem ipsum',
    time: '1:36.476',
    when: '10 Days ago',
    cleanlap: 'yes',
    setupName: 'Porsche 911 GT3 Cup 204226',
    rubber: 'Slight usage',
  };
  constructor( private dialogRef: MatDialogRef<ChartSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<{name: string}[]>) {
    moveItemInArray(this.ItemList, event.previousIndex, event.currentIndex);
  }

  addOrRemove(event:any){

     const found  = this.ItemList.find(element => element === event.target.outerText );
     if(found === event.target.outerText){

      const index = this.ItemList.indexOf(event.target.outerText);
      if (index > -1) {
        this.ItemList.splice(index, 1);
      }
      event.currentTarget.classList.remove('bgColor1');
      event.currentTarget.classList.add('bgColor5');
      event.currentTarget.classList.remove('color5');

     }
     else{
      this.ItemList.push(event.target.outerText);
      event.currentTarget.classList.remove('bgColor5');
      event.currentTarget.classList.add('bgColor1');
      event.currentTarget.classList.add('color5');
      
     }
     event.stopPropagation();
     event.preventDefault();

  }

  acceptChanges(){

     this.dialogRef.close(this.ItemList);

  }
}
