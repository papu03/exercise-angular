import { Component, OnInit } from '@angular/core';
import { CrewMember } from '../app.shift';
import { CrewMemberService } from '../crew-member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: CrewMember[]=[]

  constructor(private crewMemberService:CrewMemberService) { }

  ngOnInit() {
    this.getMembers()
  }

  getMembers(): void {
    this.crewMemberService.getMembers().subscribe(members => this.members=members);

  }

}
