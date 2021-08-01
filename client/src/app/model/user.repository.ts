import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { User } from './user.model';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getUsers().subscribe((user) => {
      this.users = user;
    });
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find((p) => p._id === id) as User;
  }

  saveUser(saveUser: User): void {
    if (
      saveUser._id === null ||
      saveUser._id === 0 ||
      saveUser._id === undefined
    ) {
      this.dataSource.addUser(saveUser).subscribe((u) => {
        this.users.push(saveUser);
      });
    } else {
      this.dataSource.updateUser(saveUser).subscribe((user) => {
        this.users.splice(
          this.users.findIndex((u) => u._id === saveUser._id),
          1,
          saveUser
        );
      });
    }
  }

  deleteUser(userid: number): void {
    this.dataSource.deleteUser(userid).subscribe((user) => {
      this.users.splice(
        this.users.findIndex((b) => b._id === userid),
        1
      );
    });
  }

  signup(saveUser: User) : void {
    console.log('saveUser');
    console.log(saveUser);
    //saveUser.userType = false;

    this.dataSource.signup(saveUser).subscribe((u) => {
      this.users.push(saveUser);
    });
  }
}
