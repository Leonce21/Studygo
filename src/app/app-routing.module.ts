import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './sharepage/register/register.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RecommandationComponent } from './pages/userprofile/recommandation/recommandation.component';
import { AchievementsComponent } from './pages/userprofile/achievements/achievements.component';
import { CoursesComponent } from './pages/userprofile/courses/courses.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'menu/:id',component:MenupageComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'userprofile',component:UserprofileComponent},
  {path: 'recommandation',component:RecommandationComponent},
  {path: 'achievements',component:AchievementsComponent},
  {path: 'courses',component:CoursesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
