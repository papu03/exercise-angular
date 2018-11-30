import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../shift-form-services/shift.service';
import { Shift, ShiftDTO, CrewMember } from '../app.shift';
import { Location } from '@angular/common';
import { CrewMemberService } from '../shift-form-services/crew-member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
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
