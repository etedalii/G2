import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  user: User;

  constructor(private datasource: RestDataSource) {
    this.user = new User();
  }


  get authenticated(): boolean {
    //TODO 
    return true;
  }
}