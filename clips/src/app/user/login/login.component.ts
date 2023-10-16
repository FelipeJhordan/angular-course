import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AngularFireAuth) {}

  credentials = {
    email: '',
    password: ''
  }

  showAlert = false
  alertMsg = "Please wait! We are logging you in."
  alertColor = "blue"
  inSubmission = false

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! We are logging you in'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
    } catch(e) {
        this.inSubmission = false
        this.alertMsg = 'An unexpected error occurred. Please try again later.'
        this.alertColor= 'red'

        return
    }

    this.alertMsg  =  'Success!" You are logged in'
    this.alertColor = 'green'
  }
}
