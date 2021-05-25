import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"user", component:ProfileComponent},
  // {path:"search-repo", component:ReopsitoriesComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  // {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
