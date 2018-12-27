import { Component, OnInit,Input} from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { ShiftPropertyBase } from '../shift-form-property/shift-property-base';

@Component({
  selector: 'app-shift-property',
  templateUrl: './dynamic-shift-form-property.component.html',
  styleUrls: ['./dynamic-shift-form-property.component.css']
})
export class DynamicShiftFormPropertyComponent implements OnInit {

  @Input() property: ShiftPropertyBase<any>;
  @Input() form: FormGroup;

    
  constructor() { 

  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
  }
  

}
