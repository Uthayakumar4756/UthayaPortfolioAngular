import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) { }
  route:any;
  ngOnInit(): void {
    this.activatedroute.url.subscribe((data: any) => {
      this.route = data[0].path;
    })
  }

}
