import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})

export class ElPolloLocoComponent {

  showProjectInfo() {
    document.getElementById('img-gray-el-pollo')?.classList.add('d-none')
    document.getElementById('img-colored-el-pollo')?.classList.remove('d-none');
  }

  hideProjectInfo() {
    document.getElementById('img-gray-el-pollo')?.classList.remove('d-none');
    document.getElementById('img-colored-el-pollo')?.classList.add('d-none');
  }

}
