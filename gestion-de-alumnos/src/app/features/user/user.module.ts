import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginator,

  ],
  exports: [
    UserComponent,
    UserListComponent
  ],
})
export class UserModule{}
