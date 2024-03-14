import { Component } from '@angular/core';
import { MyNameSectionComponent } from './my-name-section/my-name-section.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MyNameSectionComponent, ArrowDownComponent, AboutMeComponent,
    ArrowRightComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
}
