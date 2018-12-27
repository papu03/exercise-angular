import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shift } from 'src/app/app.shift';
import { ShiftService } from 'src/app/shift-form-services/shift.service';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {

  shift:Shift;

  constructor(private route: ActivatedRoute, 
              private shiftService:ShiftService) { 

  }

  ngOnInit() {
    this.getShift()
    
  }

  getShift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shiftService.getShift(id)
      .subscribe(shift => {
        this.shift = shift
      });
  }

}
