import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  http = inject(HttpClient);

  checkboxIsChecked: boolean = false;
  sendButtonClicked: boolean = false;
  isNameValid: boolean = false;
  isMessageValid: boolean = false;
  isMailValid: boolean = false;
  isFormValid: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: ""
  }

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

  mailTest = true;

  post = {
    endPoint: 'https://dieter-von-stein.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            this.successSentInfo();
            ngForm.resetForm();
            this.resetFormState();
          },
          error: (error) => {
            console.error('Error:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
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
