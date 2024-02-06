import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent },
  { path : 'profile', component : ProfileComponent },
  { path : 'process', component : ProcessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }