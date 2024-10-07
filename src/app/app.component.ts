import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BannerComponent } from "./pages/banner/banner.component";
import { SummaryComponent } from './pages/summary/summary.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';
import * as AOS from 'aos';
import { WorkexperienceComponent } from './pages/workexperience/workexperience.component';
import { ProjectComponent } from './pages/project/project.component';
import { LinksComponent } from './pages/links/links.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,AboutComponent,HomeComponent, SummaryComponent, BannerComponent, SkillsetComponent, WorkexperienceComponent, ProjectComponent, LinksComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  currentRoute: string = '';

  constructor(private router: Router) {
    // Subscribe to router events to get the current route
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  // Check if the current route matches the given path
  isRoute(route: string): boolean {
    console.log(route)
    return this.currentRoute.includes(route);
  }
  title = 'uthayaportfolio';
  ngOnInit() {
      AOS.init();
  }
}
