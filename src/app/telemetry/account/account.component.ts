import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { country } from 'src/app/shared/interfaces/country';
import { CommonService } from 'src/app/shared/services/common.service';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder   } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers:[CommonService],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit{
   windDirection:boolean =false;
   windVelocity:boolean= false;
   trackTemperature:boolean= false;
   airTemperature:boolean= false;
   fuelConsumption:boolean=false;
   fuelLevel:boolean= false;
   YAW:boolean= false;
   pitch:boolean= false;
   roll:boolean=false;
   countries:country[]=[];
   myControl = new FormControl();
   imgUrl="../../../assets/flag-international/interanation32X32.png"
   keyword = 'name';
  currentDate = new Date();

  constructor(private commonService:CommonService,public dialog: MatDialog) {
  this.countries =this.commonService.countries;
 
   }
   ngOnInit() {
  
   }

   //Record Lap Videos on change 
   recordLapOnchange(value:any){
    this.openMessageDialog();
   }
   // open  dialong
openMessageDialog(){
  this.dialog.open(InfoDialogComponent,{
    data: {
      title: 'Manual upgrade logger from version 1.3.29',
      content:''
    }});
}
  
// increment one month
 incrementMonth(): void {
  this.currentDate = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 1,
    this.currentDate.getDate());
}
   selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
 

}
