import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  checkboxIsChecked: boolean = false;
  // checkboxIsTouched: boolean = false
  sendButtonClicked: boolean = false;

  acceptPolicy() {
    let checkbox = document.getElementById("checkbox") as HTMLInputElement;;
    if (checkbox) {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          console.log('ok');
          this.checkboxIsChecked = true;
          document.getElementById('send-btn')?.classList.add('hoverIfAcceptPolicy');
        } else {
          console.log('nok');
          this.checkboxIsChecked = false;
          document.getElementById('send-btn')?.classList.remove('hoverIfAcceptPolicy');
        }
      });
    }
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
      this.contactData = {
        name: "",
        email: "",
        message: ""
      };
      this.succsessSentInfo();
      ngForm.resetForm();
    }
  }

  succsessSentInfo() {
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
}

