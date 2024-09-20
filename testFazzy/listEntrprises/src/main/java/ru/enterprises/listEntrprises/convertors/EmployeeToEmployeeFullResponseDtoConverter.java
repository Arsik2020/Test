package ru.enterprises.listEntrprises.convertors;

import org.springframework.stereotype.Component;
import ru.enterprises.listEntrprises.dto.employee.EmployeeFullResponseDto;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullResponseDto;
import ru.enterprises.listEntrprises.entity.employee.Employee;
import ru.enterprises.listEntrprises.utils.CommonConverter;

@Component
public class EmployeeToEmployeeFullResponseDtoConverter extends CommonConverter<Employee, EmployeeFullResponseDto> {

    @Override
    public EmployeeFullResponseDto convert(Employee source) {
        EmployeeFullResponseDto target = new EmployeeFullResponseDto();
        target.setId(source.getEmId());
        target.setName(source.getEmFirstName());
        target.setSurname(source.getEmSurname());
        target.setLastname(source.getEmLastName());
        target.setPost(source.getEmPost());
        target.setEnterpriceId(new EnterpriseFullResponseDto(
                source.getEmEId().getEName(),
                source.getEmEId().getEDeleteDate(),
                source.getEmEId().getEId()
        ));
        target.setDeleteDate(source.getEmDeleteDate());

        return target;
    }

}
