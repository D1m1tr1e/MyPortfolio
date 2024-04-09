import { booleanAttribute, Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //public menuIsOpen: boolean = false;

  @Input() menuIsOpen: boolean = false;
  
openMenu() {
    let menuElement = document.getElementById('menu-btn');
    if (!this.menuIsOpen && menuElement) {
      menuElement.classList.toggle("change");
      this.menuIsOpen = true;
      console.log('header', this.menuIsOpen);
      
    } else if (this.menuIsOpen && menuElement) {
      menuElement.classList.toggle("change");
      this.menuIsOpen = false;
      console.log('header', this.menuIsOpen);
    }
  }

  closeMenu() {
    this.menuIsOpen = false;
    let menuElement = document.getElementById('menu-btn');
    if (menuElement) {
      menuElement.classList.toggle("change");
    }
  }
}


