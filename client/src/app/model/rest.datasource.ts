import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Question } from './question.model';
import { JwtHelperService } from '@auth0/angular-jwt';
const POROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  user: User;
  baseUrl: string;
  authToken!: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origion': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.user = new User();
    //this.baseUrl = `${POROTOCOL}://${location.hostname}:${PORT}/api/`;
    this.baseUrl = 'https://comp229-g2-s2021.herokuapp.com/api/';
  }

  // ***************** User Section  ***************************
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'signup', user);
  }

  addUser(user: User): Observable<User> {
    this.loadToken();
    return this.http.post<User>(this.baseUrl + 'users/add', user,this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    this.loadToken();
    return this.http.post<User>(`${this.baseUrl}users/edit/${user._id}`, user,this.httpOptions);
  }

  deleteUser(id: Number): Observable<User> {
    this.loadToken();
    return this.http.get<User>(`${this.baseUrl}users/delete/${id}`,this.httpOptions);
  }

  //*********************End USER SECTION *************************** */

  // ************************Question Section *************************

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl + 'questions');
  }

  addQuestion(question: Question): Observable<User> {
    this.loadToken();
    return this.http.post<Question>(this.baseUrl + 'questions/add', question,this.httpOptions);
  }

  updateQuestion(question: Question): Observable<User> {
    this.loadToken();
    return this.http.post<Question>(`${this.baseUrl}questions/edit/${question._id}`, question,this.httpOptions);
  }

  deleteQuestion(id: number): Observable<Question> {
    this.loadToken();
    return this.http.get<Question>(`${this.baseUrl}questions/delete/${id}`,this.httpOptions);
  }

  //*********************End Question SECTION *************************** */

  // ************************ Authentication Section ******************** */
  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  logout(): Observable<any> {
    this.authToken = '';
    this.user = new User();
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token') || '';
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }
  //********************************************************************** */
  
}
