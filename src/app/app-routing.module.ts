import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContectMeComponent } from './components/contect-me/contect-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormsValidationsComponent } from './components/forms-validations/forms-validations.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contect-me', component: ContectMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'form', component: FormsValidationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
