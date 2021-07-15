import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from './user.repository';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [UserRepository, RestDataSource],
})
export class ModelModule {}
