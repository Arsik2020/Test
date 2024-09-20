package ru.enterprises.listEntrprises.convertors;

import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullResponseDto;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;
import ru.enterprises.listEntrprises.utils.CommonConverter;

@Component
public class EnterprisesToEnterprisesFullResponseDtoConverter
        extends CommonConverter<Enterprises, EnterpriseFullResponseDto> {

    @Override
    public EnterpriseFullResponseDto convert(Enterprises source) {
        EnterpriseFullResponseDto target = new EnterpriseFullResponseDto();

        target.setId(source.getEId());
        target.setName(source.getEName());
        target.setDeleteDate(source.getEDeleteDate());
        if (source.getEmployeeCollection() != null) {
            target.setCount(source.getEmployeeCollection()
                    .stream()
                    .filter(item -> item.getEmDeleteDate() == null)
                    .collect(Collectors.toList()).size());
        }
        return target;
    }

}
