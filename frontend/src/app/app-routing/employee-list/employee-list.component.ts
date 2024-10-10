import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, RouterOutlet, RouterModule, MatButtonModule, MatIcon],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {



  updateEmployee(employeeId: number) {
    this.router.navigate(['/app-route/employee', { employeeId: employeeId }]);
  } 


  deleteEmployee(employeeId: number): void {
    console.log(employeeId);
    this.employeeService.deleteEmployee(employeeId).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.getEmployeeList();
        },
        error: (err: any) => {
          console.log(err.HttpErrorResponse);
        }
      }
    )
  }

  constructor(public employeeService: EmployeeService, public router: Router) { }

  datasource: Employee[] = [];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'mobile', 'address', 'gender', 'department', 'skills', 'edit', 'delete'];

  ngOnInit(): void {
    this.getEmployeeList();
  }


  getEmployeeList(): void {
    this.employeeService.getEmployees().subscribe(
      {
        next: (res: Employee[]) => {
          this.datasource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      }
    )
  }

}
