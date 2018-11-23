import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShiftService} from '../shift.service';
import {Shift} from '../app.shift';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {

  // shift:Observable<Shift>;
  shift:Shift;

  constructor(private route: ActivatedRoute, private shiftService:ShiftService) { 
    console.log("ShiftDetailsComponent constructor")

  }

  ngOnInit() {
    console.log("ShiftDetailsComponent ngOnInit")

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
