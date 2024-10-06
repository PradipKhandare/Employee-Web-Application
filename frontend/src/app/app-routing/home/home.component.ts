import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, RouterModule, RouterOutlet, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
