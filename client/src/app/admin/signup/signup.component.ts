import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  user: User = new User();
  public errorMessage!: string;

  constructor(private router: Router, private auth: AuthService,
     private repository: UserRepository) {}
  ngOnInit(): void {
  }

  signup(form: NgForm): void {
    this.repository.signup(this.user);
    this.router.navigateByUrl('/admin/auth')
  }
}
