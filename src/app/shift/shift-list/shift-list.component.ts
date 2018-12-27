import { Component, OnInit } from '@angular/core';
import { Shift, ShiftDTO } from 'src/app/app.shift';
import { ShiftService } from 'src/app/shift-form-services/shift.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {

  shifts: Shift[]=[]

  constructor(private shiftService: ShiftService,
              private location: Location) {}

  ngOnInit() {
    this.getShifts();

  }

  getShifts(): void{
    this.shiftService.getShifts().subscribe(shifts => {
      this.shifts=shifts
      this.shifts.sort((a, b) => a.shiftId - b.shiftId)
    });
  }

  

  goBack(): void {
    this.location.back();
  }

  deleteShift(shift:ShiftDTO): void{

    this.shifts = this.shifts.filter(s => s.shiftId!=shift.shiftId)
    this.shiftService.deleteShift(shift).subscribe()
  }
}
