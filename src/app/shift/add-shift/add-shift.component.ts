import { Component, OnInit } from '@angular/core';
import { ShiftPropertyService } from 'src/app/shift-form-services/shift-property.service';
import { ShiftPropertyBase } from 'src/app/dynamic-form/shift-form-property/shift-property-base';


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
