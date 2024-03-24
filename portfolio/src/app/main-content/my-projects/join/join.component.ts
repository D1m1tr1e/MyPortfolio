import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

 showProjectInfo() {
    document.getElementById('img-gray')?.classList.add('d-none')
    document.getElementById('img-colored')?.classList.remove('d-none');
    console.log('maus ist da');
    
  }

  hideProjectInfo() {
    document.getElementById('img-gray')?.classList.remove('d-none');
    document.getElementById('img-colored')?.classList.add('d-none');
    console.log('maus nicht da');
  }

}
