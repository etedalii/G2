import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
})
export class UserEditorComponent implements OnInit {
  editing = false;
  user: User = new User();

  constructor(private repository: UserRepository,private router: Router, activateRoute: ActivatedRoute) { 
    this.editing = activateRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      Object.assign(
        this.user,
        repository.getUser(activateRoute.snapshot.params.id)
      );
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm):void{
    this.repository.saveUser(this.user);
    this.router.navigateByUrl('/admin/main/users')
  }

}