import { Routes } from '@angular/router';
import { BannerComponent } from './pages/banner/banner.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';

export const routes: Routes = [
  {
    path:"",
    component:BannerComponent
  },
  {
    path:"resume",
    component: ResumeComponent
  },
  {
    path: "home",
    component: SkillsetComponent
  },

];
