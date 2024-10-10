import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient: HttpClient) { }

  api = "http://localhost:8080"

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/employee/save`, employee);
  }


  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/employee/all`)
  }


  public deleteEmployee(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/employee/delete/${employeeId}`);
  }


  public getEmployeeById(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.api}/employee/get/${employeeId}`);
  }


  public updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.api}/employee/update/${employeeId}`, employee)
  }
}
