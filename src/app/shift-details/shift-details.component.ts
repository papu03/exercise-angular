import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShiftService} from '../shift-form-services/shift.service';
import {Shift} from '../app.shift';

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
