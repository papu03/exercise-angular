import { Component, OnInit,Input } from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { from, fromEventPattern } from 'rxjs';
import { ShiftPropertyBase } from '../shift-property-base';
import {ShiftPropertyControlService} from '../shift-form-services/shift-property-control.service';
import {ShiftPropertyService} from '../shift-form-services/shift-property.service';
import { CrewMember } from '../app.shift';
import {CrewMemberService} from '../shift-form-services/crew-member.service'
import { DropdownShift } from '../shift-dropdown'
import {ShiftService} from '../shift.service'
import { Shift} from '../app.shift';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dynamic-shift-form',
  templateUrl: './dynamic-shift-form.component.html',
  styleUrls: ['./dynamic-shift-form.component.css'],
  providers: [ ShiftPropertyControlService ]
})
export class DynamicShiftFormComponent implements OnInit {

  //@Input() properties: ShiftPropertyBase<any>[] = [];
  properties: ShiftPropertyBase<any>[] = [];
  form: FormGroup;
  JSONMembers :  DropdownShift

  constructor(private spcs: ShiftPropertyControlService,
              private crewMemberService:CrewMemberService, 
              private shiftPropertyService: ShiftPropertyService,
              private shiftService:ShiftService,
              private location: Location ) { 

    console.log("DynamicShiftFormComponent constructor")
  }

  ngOnInit() {
    console.log("DynamicShiftFormComponent ngOnInit")
    this.properties=this.shiftPropertyService.getProperty()

    this.crewMemberService.getMembers().subscribe(

      members => {
        
        for (let entry of members){

              this.JSONMembers=this.properties
              .filter(idx=>idx.key=="crewMember")[0] as DropdownShift
              this.JSONMembers.options.push({key:entry.id,value:entry.name})
           }
          
      })


    this.form = this.spcs.toFormGroup(this.properties)
    // this.getMembers();
  }
 


  
  onSubmit() {
    console.log(this.form.value);

    this.shiftService.addShift( {weekDay:this.form.value.weekday as string,
                                duration:this.form.value.duration as number,
                                crewMemberId:this.form.value.crewMember as number} as Shift).subscribe(() => this.goBack());
  
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(){
    console.log("DynamicShiftFormComponent ngOnDestroy")
  }

  

 




}
