import { Component, OnInit,Input} from '@angular/core';
import { ShiftPropertyBase } from '../shift-property-base'
import { FormGroup }        from '@angular/forms';
import {CrewMemberService} from '../shift-form-services/crew-member.service'

@Component({
  selector: 'app-shift-property',
  templateUrl: './dynamic-shift-form-property.component.html',
  styleUrls: ['./dynamic-shift-form-property.component.css']
})
export class DynamicShiftFormPropertyComponent implements OnInit {

  @Input() property: ShiftPropertyBase<any>;
  @Input() form: FormGroup;

    
  constructor(private crewMemberService:CrewMemberService) { }

  ngOnInit() {
    console.log("DynamicShiftFormPropertyComponent ngOnInit")
  }

  ngOnDestroy(){
    console.log("DynamicShiftFormPropertyComponent ngOnDestroy")
  }
  

}
