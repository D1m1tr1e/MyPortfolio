import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MainTranslationService implements OnInit {
  constructor(private translate: TranslateService) { }
  
  ngOnInit(): void {

    this.translate.currentLang = 'en'
    this.translate.use('en');
  }

  currenttranslate = 'English'

  translateEnglish() {
    this.translate.use('en');
    this.currenttranslate = 'English'
  }

  translateGerman() {
    this.translate.use('de');
    this.currenttranslate = 'German'
  }
}