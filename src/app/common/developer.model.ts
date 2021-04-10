import { Skill } from "../common/skill.model";

export class Developer{

    public lastName : string;
    public firstName : string;
    public age : number;
    public sexe : string;
    public bio : string;
    public skill : Skill[];

    



  constructor( lastName:string,  firstName:string,  age:number,  sexe:string,  bio:string, ){
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.sexe = sexe;
    this.bio = bio;
    this.skill = [];
  }
addSkill(skill : Skill){
  this.skill.push(skill)
}
}



