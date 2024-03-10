import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  openMenu() {
    let menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.classList.toggle("change");
    }
    
  }

}
