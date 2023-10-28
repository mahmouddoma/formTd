import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm | undefined; // Add { static: false }
  defaultQuestion = 'Pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    if (this.signupForm) {
      this.signupForm.form.patchValue({
        userData: {
          username: suggestedName
        }
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm) {
      this.user.username = this.signupForm.value.userData.username;
      this.user.email = this.signupForm.value.userData.email;
      this.user.secretQuestion = this.signupForm.value.secret;
      this.user.answer = this.signupForm.value.questionsAnswer;
      this.user.gender = this.signupForm.value.gender;

      this.signupForm.reset();
    }
  }
}
