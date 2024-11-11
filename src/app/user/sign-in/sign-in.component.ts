
 //*Note I will create a feature module inside the user folder like this:
 //*  ng generate module user
import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  credentials: IUserCredentials = { email: "jim@joesrobotshop.com", password: 'very-secret' };
  signInError: boolean =false;

  constructor(private userService: UserService, private router: Router) { }

  //call sign in method in userService, handlw error by tapping into
  //error event. Now modify sign-in template
  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({  //we subscribe to run the call and to access observable returned by API
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true)
    });
  }

}
