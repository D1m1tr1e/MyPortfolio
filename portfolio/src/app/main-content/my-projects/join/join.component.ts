import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

  showProjectInfo() {
    document.getElementById('img-gray-join')?.classList.add('d-none')
    document.getElementById('img-colored-join')?.classList.remove('d-none');
  }

  hideProjectInfo() {
    document.getElementById('img-gray-join')?.classList.remove('d-none');
    document.getElementById('img-colored-join')?.classList.add('d-none');
  }
}
