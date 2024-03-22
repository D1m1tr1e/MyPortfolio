import { booleanAttribute, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsOpen:boolean = false;

  
  openMenu() {
    let menuElement = document.getElementById('menu-btn');
    if (!this.menuIsOpen && menuElement) {
      menuElement.classList.toggle("change");
      this.menuIsOpen = true;
    } else if (this.menuIsOpen && menuElement) {
      menuElement.classList.toggle("change");
      this.menuIsOpen = false;
    }
  }
}

