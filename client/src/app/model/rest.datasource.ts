import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Question } from './question.model';
const POROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  user: User;
  baseUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origion': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private http: HttpClient) {
    this.user = new User();
    this.baseUrl = `${POROTOCOL}://${location.hostname}:${PORT}/`;
  }

  // ***************** User Section  ***************************
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'users/add', user);
    //TODO
    //,this.httpOptions
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}users/edit/${user._id}`, user);
    //TODO
    //,this.httpOptions
  }

  deleteUser(id: Number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/delete/${id}`); //TODO//,this.httpOptions
  }

  //*********************End USER SECTION *************************** */

  // ************************Question Section *************************

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl + 'questions');
  }

  addQuestion(question: Question): Observable<User> {
    return this.http.post<Question>(this.baseUrl + 'questions/add', question);
    //TODO
    //,this.httpOptions
  }

  updateQuestion(question: Question): Observable<User> {
    return this.http.post<Question>(`${this.baseUrl}questions/edit/${question._id}`, question);
    //TODO
    //,this.httpOptions
  }

  deleteQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}questions/delete/${id}`);
  }

  //*********************End Question SECTION *************************** */
}
