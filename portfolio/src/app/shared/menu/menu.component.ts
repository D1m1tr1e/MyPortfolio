import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() menuIsOpen: boolean = false;

  openMenu() {
    let menuElement = document.getElementById('menu-btn');
    if (menuElement) {
      menuElement.classList.toggle("change");
      this.menuIsOpen = !this.menuIsOpen; // Umkehren des aktuellen Zustands des Menüs
      console.log('heder', this.menuIsOpen);
    }
  }

}


