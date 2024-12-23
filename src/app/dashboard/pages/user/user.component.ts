import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@service/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title [title]="fullName()" />

    @if ( user() ) {
      <section>

        <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

       
        <h2> Correo: </h2>
        <p>{{ user()?.email }}</p>

      </section>

    } @else {
      <p>Cargando...</p>
    }
  
  
  `,
})
export default class UserComponent { 

  private route = inject( ActivatedRoute );
  private userService = inject(UsersService);

  public fullName = computed(() => 
    `${this.user()!.first_name} ${this.user()!.last_name}`
  );

  public user = toSignal(
    this.route.params
      .pipe(
        switchMap(({ id }) => this.userService.getUserById(id)  )
      )
  );


}
