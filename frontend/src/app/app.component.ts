import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRouteModule } from './app-routing/app-route/app-route.module';
import { HomeComponent } from "./app-routing/home/home.component";
import { HeaderComponent } from "./app-routing/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './app-routing/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [EmployeeService],
  imports: [RouterOutlet, AppRouteModule, RouterModule, HomeComponent, HeaderComponent, HttpClientModule, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
