import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  public fetchUsers(): Observable<User[]> {
    return this.http.get<any>('http://localhost:8080/api/v1/users');
  }

  public updateUsers(users: User[]) {
    return this.http.put<any>('http://localhost:8080/api/v1/users', users);
  }

  public createUsers(users: User[]) {
    return this.http.post<any>('http://localhost:8080/api/v1/users', users);
  }

  public deleteUsers(deletedUsers: User[]) {
    return this.http.delete(
      `http://localhost:8080/api/v1/users/${deletedUsers.map((el) => el.id)}`,
    );
  }
}
