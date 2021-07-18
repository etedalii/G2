import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Question } from 'src/app/model/question.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!: User;
  question! : Question;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.question = new Question();
  }

}
