import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShiftService} from '../shift.service';
import {Shift} from '../app.shift';
import {ShiftPropertyService} from '../shift-form-services/shift-property.service';
import { ShiftPropertyBase } from '../shift-property-base';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {

  shift:Shift;
  properties: ShiftPropertyBase<any>[] = [];

  constructor(private route: ActivatedRoute, 
              private shiftService:ShiftService,
              private shiftPropertyService: ShiftPropertyService) { 
    console.log("ShiftDetailsComponent constructor")

  }

  ngOnInit() {
    console.log("ShiftDetailsComponent ngOnInit")
    this.getShift()
    this.properties=this.shiftPropertyService.getProperty()

    
  }

  getShift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shiftService.getShift(id)
      .subscribe(shift => {
        this.shift = shift
      });
  }

}
