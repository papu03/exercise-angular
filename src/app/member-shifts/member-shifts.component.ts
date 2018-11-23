import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShiftService} from '../shift.service';
import { Shift } from '../app.shift';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-shifts',
  templateUrl: './member-shifts.component.html',
  styleUrls: ['./member-shifts.component.css']
})
export class MemberShiftsComponent implements OnInit {

  memberShifts: Shift[]=[]

  constructor(private route: ActivatedRoute, 
              private shiftService:ShiftService,
              private location: Location) { }

  ngOnInit() {
    this.getMemberShifts()
  }

  getMemberShifts(): void {
    const id = +this.route.snapshot.paramMap.get('memberId');
    this.shiftService.getShiftsFromMember(id)
      .subscribe(memberShifts => {
        this.memberShifts = memberShifts
        
      });
  }

  deleteAllShift():void{
    this.memberShifts=[]
    const id = +this.route.snapshot.paramMap.get('memberId');

    this.shiftService.deleteAllShiftOfMember(id).subscribe(_ => {
      this.goBack()
      
    });
  }

  goBack(): void {
    this.location.back();
  }

}
