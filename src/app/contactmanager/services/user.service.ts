import { Injectable, OnDestroy } from '@angular/core';

import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from "rxjs/operators";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService implements OnDestroy {

  private dataStore: { users: User[]; }
  private _users: BehaviorSubject<User[]>;

  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
   }

  ngOnDestroy() {
    this.destroy$.next;
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = "https://angular-material-api.azurewebsites.net/users";

    return this.http.get<User[]>(usersUrl)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data=> {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
      error => {
        console.error("Failed to Fetch Users");
      }
    )
  }
}
