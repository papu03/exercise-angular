import { Component, OnInit } from '@angular/core';
import {ShiftPropertyService} from '../shift-form-services/shift-property.service';
import { ShiftPropertyBase } from '../shift-property-base';

@Component({
  selector: 'add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {

  properties: ShiftPropertyBase<any>[] = [];

  constructor(private shiftPropertyService: ShiftPropertyService) { }

  ngOnInit() {
    this.properties=this.shiftPropertyService.getProperty()

  }

}
