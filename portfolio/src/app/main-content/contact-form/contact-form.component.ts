import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  checkboxIsChecked: boolean = false;
  sendButtonClicked: boolean = false;
  isNameValid: boolean = false;
  isMessageValid: boolean = false;
  isMailValid: boolean = false;
  isFormValid: boolean = false;

  checkNameValidity(isValid: boolean) {
    this.isNameValid = isValid;
    this.isFormCorrectlyFilledOut();
  }

  checkMessageValidity(isValid: boolean) {
    this.isMessageValid = isValid;
    this.isFormCorrectlyFilledOut();
  }

  checkMailValidity(isValid: boolean) {
    this.isMailValid = isValid;
    this.isFormCorrectlyFilledOut();
  }

  checkCheckboxValidity(isChecked: boolean) {
    this.checkboxIsChecked = isChecked;
    this.isFormCorrectlyFilledOut();
  }

  isFormCorrectlyFilledOut() {
    this.isFormValid = this.checkboxIsChecked && this.isNameValid && this.isMessageValid && this.isMailValid;
    console.log('check pass', this.checkboxIsChecked, 'name passt', this.isNameValid, 'mail passt', this.isMailValid, 'nachricht passt', this.isMessageValid);
    const sendButton = document.getElementById('send-btn') as HTMLInputElement;
    if (sendButton) {
      sendButton.disabled = !this.isFormValid;
      if (this.isFormValid) {
        sendButton.classList.add('hoverIfAcceptPolicy');
      } else {
        sendButton.classList.remove('hoverIfAcceptPolicy');
      }
    }
  }

  sendMessage() {
    this.sendButtonClicked = true;
    this.isFormCorrectlyFilledOut();
  }

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && this.isFormValid) {
      console.log(this.contactData);
      this.contactData = {
        name: "",
        email: "",
        message: ""
      };
      this.successSentInfo();
      ngForm.resetForm();
      this.resetFormState();
    }
  }

  successSentInfo() {
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Message sent successfully!"
    });
  }

  resetFormState() {
    this.isNameValid = false;
    this.isMessageValid = false;
    this.isMailValid = false;
    this.checkboxIsChecked = false;
    this.sendButtonClicked = false;
    this.isFormValid = false;
  }
}
