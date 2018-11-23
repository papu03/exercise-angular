import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../shift.service';
import { Shift } from '../app.shift';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shifts: Shift[]=[]

  constructor(private shiftService: ShiftService,private location: Location) {
    console.log("DashboardComponent constructor")

   }

  ngOnInit() {
    this.getShifts();

  }

  getShifts(): void{
    this.shiftService.getShifts().subscribe(shifts => this.shifts=shifts);
   
  }

  goBack(): void {
    this.location.back();
  }

  deleteShift(shift:Shift): void{

    this.shifts = this.shifts.filter(s => s!=shift)
    this.shiftService.deleteShift(shift).subscribe()
  }


}
