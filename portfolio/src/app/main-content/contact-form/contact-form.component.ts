import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  checkboxIsChecked = false;

  acceptPolicy() {
    let checkbox = document.getElementById("checkbox") as HTMLInputElement;;
    if (checkbox) {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          console.log('ok');
        } else {
          console.log('nok');
        }
      });
    }
  }

}
