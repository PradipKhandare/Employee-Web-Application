package com.angular.crud_application.service.IMPL;

import com.angular.crud_application.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeServiceIMPL {
    public Employee saveEmployee(Employee employee);

    public List<Employee> getAllEmployee();

    public Employee getEmployee(Long id);

    public void deleteEmployee(Long id);

    public Employee updateEmployee(Employee employee);
}
