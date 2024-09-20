package ru.enterprises.listEntrprises.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;

@Repository
public interface EnterpriseRepository extends JpaRepository<Enterprises, String> {

    public List<Enterprises> findAllByeDeleteDateIsNull();

}
