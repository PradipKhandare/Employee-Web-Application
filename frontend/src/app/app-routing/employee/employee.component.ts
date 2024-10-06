import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { Employee } from '../../employee.model';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { error } from 'console';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatDividerModule, MatSelectModule, MatRadioModule, FormsModule, HttpClientModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {



  checkSkills(skill: string) {
    return this.employee.skills != null && this.employee.skills.includes(skill);
  }


  saveEmployeeForm(employeeForm: NgForm): void {
    this.employeeService.saveEmployee(this.employee).subscribe({
      next: (res: Employee) => {
        console.log(res);
        employeeForm.reset();
        this.employee.gender = '';
      }, error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
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

  employee: Employee = {
    employeeId: 0,
    employeeName: "",
    mobile: "",
    address: "",
    gender: "",
    department: "",
    skills: ""
  }

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

  }
}
