import { NgModule } from '@angular/core';
import { UserRepository } from './user.repository';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [UserRepository, RestDataSource,AuthService],
})
export class ModelModule {}
