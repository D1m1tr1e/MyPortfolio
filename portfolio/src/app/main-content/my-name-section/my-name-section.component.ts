import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-name-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-name-section.component.html',
  styleUrl: './my-name-section.component.scss'
})
export class MyNameSectionComponent {

}
