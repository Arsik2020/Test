package ru.enterprises.listEntrprises.convertors;

import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Component;
import ru.enterprises.listEntrprises.dto.employee.EmployeeFullRequestDto;
import ru.enterprises.listEntrprises.entity.employee.Employee;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;
import ru.enterprises.listEntrprises.repository.EnterpriseRepository;
import ru.enterprises.listEntrprises.utils.CommonConverter;

@Component
public class EmployeeFullRequestDtoToEmployeeConverter extends CommonConverter<EmployeeFullRequestDto, Employee> {

    @Autowired
    private EnterpriseRepository repository;

    @Override
    public Employee convert(EmployeeFullRequestDto source) {
        Employee target = new Employee();
        target.setEmId(source.getId() == null || source.getId().isEmpty()
                ? UUID.randomUUID().toString()
                : source.getId());

        target.setEmEId(repository
                .findById(source.getEnterpriceId().getId())
                .orElse(null));
        
        target.setEmFirstName(source.getName());
        target.setEmSurname(source.getSurname());
        target.setEmLastName(source.getLastname());
        target.setEmPost(source.getPost());
        target.setEmDeleteDate(source.getDeleteDate());
        return target;
    }

}
