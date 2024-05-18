import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrow-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-right.component.html',
  styleUrl: './arrow-right.component.scss'
})
export class ArrowRightComponent {
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('#arrowSectionRight');
    const sectionPosition = section.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (sectionPosition.top < screenHeight && sectionPosition.bottom >= 0) {
      section.classList.add('startMovingArrow');
    } else {
      section.classList.remove('startMovingArrow');
    }
  }
}
