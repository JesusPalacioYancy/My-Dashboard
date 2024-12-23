import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@service/users.service';
import { TitleComponent } from '@shared/title/title.component';


@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent { 


  public userService = inject(UsersService);

  public users = this.userService.users;


}
