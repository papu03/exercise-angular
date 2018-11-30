import { Component, OnInit,Input } from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { ShiftPropertyBase } from '../shift-form-property/shift-property-base';
import {ShiftPropertyControlService} from '../shift-form-services/shift-property-control.service';
import {CrewMemberService} from '../shift-form-services/crew-member.service'
import { DropdownShift } from '../shift-form-property/shift-dropdown'
import {ShiftService} from '../shift-form-services/shift.service'
import { Shift, CrewMember, WeekDay,ShiftDTO} from '../app.shift';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-shift-form',
  templateUrl: './add-shift-form.component.html',
  styleUrls: ['./add-shift-form.component.css'],
  providers: [ ShiftPropertyControlService ]
})
export class AddShiftFormComponent implements OnInit {

  @Input() properties: ShiftPropertyBase<any>[] = [];
  @Input() shift:Shift

  members:CrewMember[]
  form: FormGroup;
  JSONMembers :  DropdownShift

  constructor(private spcs: ShiftPropertyControlService,
              private crewMemberService:CrewMemberService, 
              private shiftService:ShiftService,
              private location: Location ) { 

  }

  ngOnInit() {

    this.form = this.spcs.toFormGroup(this.properties)

    this.crewMemberService.getMembers().subscribe(

      members => {
        
        this.members=members

        for (let member of this.members){

            this.JSONMembers=this.properties.filter(idx=>idx.key=="crewMember")[0] as DropdownShift
            this.JSONMembers.options.push({key:member.id,value:member.name})
        }
      })

    // this.logNameChange();
  }
 
  logNameChange() {
    const nameControl = this.form.get('duration');
    nameControl.valueChanges.forEach(
      (value: string) => console.log(value)
    );
  }

  
  addShift() {

    this.shiftService.addShift( {weekDay:this.form.value.weekday as string,
                                duration:this.form.value.duration as number,
                                crewMemberId:this.form.value.crewMember as number} as ShiftDTO).subscribe(() => this.goBack());
  
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(){
  }

  

 




}
