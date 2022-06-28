import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { JobInfoComponent } from './pages/job-info/job-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jobs/:id', component: JobInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [ HomeComponent, JobInfoComponent ];
}
