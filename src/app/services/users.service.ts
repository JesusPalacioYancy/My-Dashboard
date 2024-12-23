import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interface/req-response';
import { delay, map, Observable } from 'rxjs';

interface State{
  users: User[];
  loadingt: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private http = inject(HttpClient);
  private baseUrl: string = 'https://reqres.in/api/users';

  #state = signal<State>({
    loadingt: true,
    users: []
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loadingt);

  constructor() {
    this.http.get<UsersResponse>(`${this.baseUrl}`)
      .pipe(delay(1500))
      .subscribe(
        (res) => this.#state.set(
          { users: res.data, loadingt: false }));
  };


  getUserById(id: number): Observable<User | undefined> {
    return this.http.get<UserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        delay(1500),
        map((res) => res.data)
      );
  };

};
