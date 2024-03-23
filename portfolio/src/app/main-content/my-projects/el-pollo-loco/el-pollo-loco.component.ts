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
    let imgIsGray = document.getElementById('img-gray');
    let imgIsColored = document.getElementById('img-colored');
    
    imgIsGray?.classList.add('d-none')
    imgIsColored?.classList.remove('d-none');
  }

  hideProjectInfo() {
    console.log('maus nicht da');
    document.getElementById('img-gray')?.classList.remove('d-none');
    document.getElementById('img-colored')?.classList.add('d-none');
  }

}
