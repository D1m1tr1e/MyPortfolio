import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  standalone: true,
  imports: [],
  templateUrl: './arrow-left.component.html',
  styleUrl: './arrow-left.component.scss'
})
export class ArrowLeftComponent {
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('#arrowSectionLeft');
    const sectionPosition = section.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (sectionPosition.top < screenHeight && sectionPosition.bottom >= 0) {
      section.classList.add('startMovingArrow');
    } else {
      section.classList.remove('startMovingArrow');
    }
  }
}
