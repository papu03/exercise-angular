import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shift-form-services/shift.service';

@Component({
  selector: 'app-validate-shifts',
  templateUrl: './validate-shifts.component.html',
  styleUrls: ['./validate-shifts.component.css']
})
export class ValidateShiftsComponent implements OnInit {

  // invalidShifts: Map<Shift,[]>= new Map<Shift,[]>()
  invalidShifts: any[]=[]
  

  constructor(private shiftService: ShiftService) { }


  ngOnInit() {
    this.getInvalidShifts()
  }

  getInvalidShifts(): void{

    this.shiftService.getInvalidShifts().subscribe(invalidShifts => {

      this.invalidShifts=invalidShifts
      console.log(this.invalidShifts)
    });
  }

}
