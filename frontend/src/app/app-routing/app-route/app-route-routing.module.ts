import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { EmployeeComponent } from '../employee/employee.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule { }
