package ru.enterprises.listEntrprises.convertors;

import java.util.UUID;
import org.springframework.stereotype.Component;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullRequestDto;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;
import ru.enterprises.listEntrprises.utils.CommonConverter;

@Component
public class EnterpriseFullRequestDtoToEnterprisesConverter
        extends CommonConverter<EnterpriseFullRequestDto, Enterprises> {

    @Override
    public Enterprises convert(EnterpriseFullRequestDto source) {
        Enterprises target = new Enterprises();
        target.setEId(
                source.getId() == null || source.getId().isEmpty()
                ? UUID.randomUUID().toString()
                : source.getId());
        target.setEName(source.getName());
        target.setEDeleteDate(source.getDeleteDate());
        return target;
    }

}
