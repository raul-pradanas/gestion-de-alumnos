import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './features/user/components/user-list/user-list.component';
import { UserProfileComponent } from './features/user/components/user-profile/user-profile.component';
import { UserComponent } from './features/user/components/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users', component: UserComponent },
  { path: 'viewUsers', component: UserListComponent },
  { path: 'userProfile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
