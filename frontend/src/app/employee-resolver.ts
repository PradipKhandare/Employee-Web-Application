import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { routes } from "./app.routes";
import { EmployeeService } from "./employee.service";
import { Observable, of } from "rxjs";
import { Employee } from "./employee.model";
import { inject } from "@angular/core";

export const EmployeeResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, employeeService: EmployeeService = inject(EmployeeService)): Observable<Employee> => {
    const employeeId = route.paramMap.get("employeeId")

    if (employeeId) {
        return employeeService.getEmployeeById(Number(employeeId))
    } else {
        const employee: Employee = {
            employeeId: 0,
            employeeName: "",
            mobile: "",
            address: "",
            gender: "",
            department: "",
            skills: ""
        }

        return of(employee);
    }
}