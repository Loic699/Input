import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../common/skill.model";

@Component({
  selector: 'app-skill',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {
  @Input() public skill: Skill;
  constructor() { }

  ngOnInit(): void {
  }

}
