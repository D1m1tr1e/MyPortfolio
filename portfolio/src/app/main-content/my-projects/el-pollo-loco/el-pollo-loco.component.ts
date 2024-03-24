import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})

export class ElPolloLocoComponent {

  showProjectInfo() {
    document.getElementById('img-gray')?.classList.add('d-none')
    document.getElementById('img-colored')?.classList.remove('d-none');
  }

  hideProjectInfo() {
    document.getElementById('img-gray')?.classList.remove('d-none');
    document.getElementById('img-colored')?.classList.add('d-none');
  }

}
