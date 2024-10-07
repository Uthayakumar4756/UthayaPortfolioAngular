import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { BannerComponent } from '../banner/banner.component';
import { HeaderComponent } from '../header/header.component';
import { LinksComponent } from '../links/links.component';
import { ProjectComponent } from '../project/project.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { SummaryComponent } from '../summary/summary.component';
import { WorkexperienceComponent } from '../workexperience/workexperience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule,AboutComponent,HomeComponent, SummaryComponent, BannerComponent, SkillsetComponent, WorkexperienceComponent, ProjectComponent, LinksComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
