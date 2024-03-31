import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  checkboxIsChecked = false;
  sendButtonClicked = false;

  acceptPolicy() {
    this.checkboxIsChecked = !this.checkboxIsChecked;
    console.log(this.checkboxIsChecked);
  }

  sendMessage() {
    this.sendButtonClicked = true;
  }

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData)
      /* this.contactData = {
         name: "",
         email: "",
         message: ""
       };
       ngForm.resetForm(); // Zurücksetzen des Formulars
 */
    }
  }


}
