import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { MainTranslationService } from '../../main-translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) { };
  translateData = inject(MainTranslationService);

  menuIsOpen: boolean = false;
  en: string = '';
  de: string = 'none';

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

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.changeClassForLanguage(event.lang);
    });
  }

  changeClassForLanguage(eventLanguage: any) {

    if (eventLanguage == 'en') {
      this.en = 'none';
      this.de = '';
    } else if (eventLanguage == 'de') {
      this.de = 'none';
      this.en = '';
    }
  }
}


