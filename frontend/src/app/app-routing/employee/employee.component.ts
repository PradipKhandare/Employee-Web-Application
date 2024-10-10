import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { Employee } from '../../employee.model';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatDividerModule, MatSelectModule, MatRadioModule, FormsModule, HttpClientModule, RouterModule, RouterOutlet],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employee: any;

  isCreateEmployee: boolean = true;

  checkSkills(skill: string) {
    return this.employee.skills != null && this.employee.skills.includes(skill);
  }


  saveEmployeeForm(employeeForm: NgForm): void {


    if (this.isCreateEmployee) {
      this.employeeService.saveEmployee(this.employee).subscribe({
        next: (res: Employee) => {
          console.log(res);
          employeeForm.reset();
          this.employee.gender = '';
          (<any>this.router).navigate(["/app-route/employee-list"]);
        }, error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
    } else {
      this.employeeService.updateEmployee(this.employee.employeeId, this.employee).subscribe(
        {
          next: (res: Employee) => {
            this.router.navigate(["/app-route/employee-list"])
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        }
      )
    }

  }

  checkGender(gender: String) {
    return this.employee.gender != null && this.employee.gender == gender;
  }

  skills: String[] = [];

  onSkilssChanges(event: any) {
    if (event.checked) {
      this.skills.push(event.source.value)
    } else {
      this.skills.forEach((item, index) => {
        if (item == event.source.value) {
          this.skills.splice(index, 1);
        }
      });
    }
    this.employee.skills = this.skills.toString()
  }

  selectGender(employeeGender: string): void {
    this.employee.gender = employeeGender
  }



  constructor(public employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = this.activatedRoute.snapshot.data['employee']
    console.log(this.employee)

    if (this.employee && this.employee.employeeId > 0) {
      this.isCreateEmployee = false;

      if (this.employee.skills != '') {
        this.skills = [];
        this.skills = this.employee.skills.split(',');
      }
    } else {
      this.isCreateEmployee = true;
    }
  }
}
