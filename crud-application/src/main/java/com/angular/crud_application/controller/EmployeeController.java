package com.angular.crud_application.controller;
import com.angular.crud_application.entity.Employee;
import com.angular.crud_application.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/save")
    public Employee saveEmployee(@RequestBody Employee employee){
           return employeeService.saveEmployee(employee);
    }

    @GetMapping("/all")
    public List<Employee> getAllEmployee(){
      return employeeService.getAllEmployee();
    }

    @GetMapping("/get/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return employeeService.getEmployee(id);
    }

    @PutMapping("/update/{id}")
    public Employee updateEmployee(@RequestBody Employee employee,@PathVariable Long id){
        if (id == null) {
            throw new IllegalArgumentException("Employee ID must not be null for update.");
        }
        employee.setEmployeeId(id);
        Employee updatedEmployee = employeeService.updateEmployee(employee);
        return employeeService.updateEmployee(updatedEmployee);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
    employeeService.deleteEmployee(id);
    }
}
