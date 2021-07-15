import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PartialModule } from '../partials/partial.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PartialModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, PartialModule],
})
export class PageModule {}
