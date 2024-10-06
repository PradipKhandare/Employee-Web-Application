package com.angular.crud_application.service;


import ch.qos.logback.core.model.conditional.ElseModel;
import com.angular.crud_application.entity.Employee;
import com.angular.crud_application.repository.EmployeeRepository;
import com.angular.crud_application.service.IMPL.EmployeeServiceIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService implements EmployeeServiceIMPL {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        Employee existing = employeeRepository.findById(employee.getEmployeeId()).orElseThrow(() -> new RuntimeException("Employee not found"));
        return employeeRepository.save(employee);
    }
}
