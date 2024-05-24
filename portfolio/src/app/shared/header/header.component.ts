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

  menuIsOpen: boolean = false;
  enOff: string = '';
  deOff: string = 'none';

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

  closeMenu() {
    this.menuIsOpen = false;
    let menuElement = document.getElementById('menu-btn');
    if (menuElement) {
      menuElement.classList.toggle("change");
    }
  }

  switchToEnglish() {
    this.enOff = 'none';
    this.deOff = '';
    // Fügen Sie hier die Logik zum Umschalten der Sprache hinzu, z.B. this.translateService.use('en');
  }

  switchToGerman() {
    this.enOff = '';
    this.deOff = 'none';
    // Fügen Sie hier die Logik zum Umschalten der Sprache hinzu, z.B. this.translateService.use('de');
  }
}


