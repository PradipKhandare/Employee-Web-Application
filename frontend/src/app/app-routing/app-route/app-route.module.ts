import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouteRoutingModule } from './app-route-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../employee.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRouteRoutingModule,
    MatGridListModule,
    RouterModule
  ]
})
export class AppRouteModule { }
