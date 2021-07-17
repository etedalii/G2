import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';

@Component({
  templateUrl: './user-table.component.html',
})
export class UserTableComponent implements OnInit {
  constructor(private repository: UserRepository, private router: Router) {
  }

  ngOnInit(): void {}

  getUsers(): User[] {
    return this.repository.getUsers();
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deleteUser(id);
    } else {
      this.router.navigateByUrl('/admin/main/users');
    }
  }

  addUser():void{
    this.router.navigateByUrl('/admin/main/users/add')
  }

  editUser(id: number):void{
    this.router.navigateByUrl(`/admin/main/users/edit/${id}`)
  }
}