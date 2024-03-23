import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skills = [
    {
      img: "angular.png",
      name: "Angular"
    },
    {
      img: "typescript.png",
      name: "TypeScript"
    },
    {
      img: "javascript.png",
      name: "JavaScript"
    },
    {
      img: "html.png",
      name: "HTML"
    },
    {
      img: "css.png",
      name: "CSS"
    },
    {
      img: "firebase.png",
      name: "Firebase"
    },
    {
      img: "git.png",
      name: "Git"
    },
    {
      img: "scrum.png",
      name: "Scrum"
    },
    {
      img: "api.png",
      name: "Rest-Api"
    },
    {
      img: "materialdesign.png",
      name: "Material Design"
    }
  ]
}
