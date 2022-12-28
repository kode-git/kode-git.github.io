import { Component, OnInit } from '@angular/core';


class Skill {
  name : string; // name of the skill
  level: number; // level of the skill (0 to 100) is in percentage
  image : string; // url of the image
  color: string; // color of the skill background (gray or white)
  backgroundColor : string // color of the background for the progress bar

  constructor(name : string, level : number, image : string, color : string, backgroundColor : string){
    this.name = name;
    this.level = level;
    this.image = image;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills : Skill[];

  constructor() { 
    this.skills = [
      new Skill('Angular', 90, '../../../assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
      new Skill('Angular', 10, 'assets/skills/angular.png', '#ECECEC', '#FAFAFA'),
      new Skill('Angular', 20, 'assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
      new Skill('Angular', 30, 'assets/skills/angular.png', '#ECECEC', '#FAFAFA'),
      new Skill('Angular', 50, 'assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
      new Skill('Angular', 30, 'assets/skills/angular.png', '#ECECEC', '#FAFAFA'),
      new Skill('Angular', 50, 'assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
      new Skill('Angular', 30, 'assets/skills/angular.png', '#ECECEC', '#FAFAFA'),
      new Skill('Angular', 50, 'assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
      new Skill('Angular', 30, 'assets/skills/angular.png', '#ECECEC', '#FAFAFA'),
      new Skill('Angular', 50, 'assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
    ]
  }

  ngOnInit(): void {
  }


}
