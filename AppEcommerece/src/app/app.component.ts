import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { HeadersComponent } from "./layout/headers/headers.component";
import { FootersComponent } from "./layout/footers/footers.component";
import { ViewChildComponentComponent } from "./view-child-component/view-child-component.component";



//RouterOutlet, HeadersComponent, FootersComponent,
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  RouterOutlet,RouterLink,RouterLinkActive],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppEcommerece';
}
