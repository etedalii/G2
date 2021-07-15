import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
const POROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  user: User;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.user = new User();
    this.baseUrl = `${POROTOCOL}://${location.hostname}:${PORT}/`;
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origion': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

// ***************** User Section  ***************************
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl + 'users/add', user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}users/edit/${user._id}`, user, this.httpOptions);
  }

  deleteUser(id: Number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/delete/${id}`, this.httpOptions);
  }

//*********************End USER SECTION *************************** */

}
