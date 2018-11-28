import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShiftService} from '../shift-form-services/shift.service';
import {Shift, ShiftDTO} from '../app.shift';
import {ShiftPropertyService} from '../shift-form-services/shift-property.service';
import { ShiftPropertyBase } from '../shift-form/shift-property-base';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {

  shift:ShiftDTO;
  properties: ShiftPropertyBase<any>[] = [];

  constructor(private route: ActivatedRoute, 
              private shiftService:ShiftService,
              private shiftPropertyService: ShiftPropertyService) { 

  }

  ngOnInit() {
    this.getShift()
    this.properties=this.shiftPropertyService.getProperty()

    
  }

  getShift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shiftService.getShiftDTO(id)
      .subscribe(shift => {
        this.shift = shift
      });
  }

}
