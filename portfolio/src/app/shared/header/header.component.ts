import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsOpen = false;

  openMenu() {
    let menuElement = document.getElementById('menu-btn');
    if (menuElement) {
      menuElement.classList.toggle("change");
    }
  }
}


