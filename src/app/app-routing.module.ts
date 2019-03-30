import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ResumeCreationComponent } from './components/resume-creation/resume-creation.component';
import { ResumeListingComponent } from './components/resume-listing/resume-listing.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'listing', component: ResumeListingComponent },
  { path: 'creation', component: ResumeCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
