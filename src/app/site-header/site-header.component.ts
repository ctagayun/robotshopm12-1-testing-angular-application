import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;    //create a property called "user": the type of it
                                //could be IUser or Null

  showSignOutMenu: boolean = false; //used by toggleSignOutMenu

   constructor(private userService: UserService) { }

   //Let us get the user state from the userService:
   ngOnInit() {
    this.userService.getUser().subscribe({ //call getUser. We will subscribe.
      next: (user) => { this.user = user } //assign the observable to "user" property
                                           //At this point we will have the "user" state
                                           //in our SiteHeaderCompnent
    })
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }

}

