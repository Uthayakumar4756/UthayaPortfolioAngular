import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./pages/banner/banner.component";
import { SummaryComponent } from './pages/summary/summary.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';
import * as AOS from 'aos';
import { WorkexperienceComponent } from './pages/workexperience/workexperience.component';
import { ProjectComponent } from './pages/project/project.component';
import { LinksComponent } from './pages/links/links.component';
import { HeaderComponent } from './pages/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SummaryComponent, BannerComponent, SkillsetComponent, WorkexperienceComponent, ProjectComponent, LinksComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'uthayaportfolio';
  ngOnInit() {
      AOS.init();
  }
}
