package ru.enterprises.listEntrprises.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.enterprises.listEntrprises.entity.employee.Employee;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {

    public List<Employee> findAllByemDeleteDateIsNull();

    public List<Employee> findAllByemEIdAndEmDeleteDateIsNull(@Param(value = "emEId") Enterprises emEId);

}
