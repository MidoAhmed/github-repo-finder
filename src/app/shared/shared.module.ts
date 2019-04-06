import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './components/repository/repository.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RepositoryComponent],
  exports: [RepositoryComponent]
})
export class SharedModule { }
