import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse } from '@interface/req-response';
import { delay } from 'rxjs';

interface State{
  users: User[];
  loadingt: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private http = inject(HttpClient);
  private baseUrl: string = 'https://reqres.in/api/users?page=2';

  #state = signal<State>({
    loadingt: true,
    users: []
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loadingt);

  constructor() {
    this.http.get<UserResponse>(`${this.baseUrl}`)
      .pipe(delay(2000))
      .subscribe(
        (res) => this.#state.set(
          { users: res.data, loadingt: false }));
  }

}
