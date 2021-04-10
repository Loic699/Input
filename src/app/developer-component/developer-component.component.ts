import { Component, OnInit, } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';


@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit {
public Loic : Developer;
public LoicSkill : Skill; 

  constructor() {
  
   
   }

  ngOnInit(): void {
    this.Loic = new Developer("coucou", "c'est moi", 23, "mâle", "je suis un géni incompris");
    this.LoicSkill = new Skill("blabla", "blibli","bloblo");
    this.Loic.addSkill(this.LoicSkill);
  }

}
