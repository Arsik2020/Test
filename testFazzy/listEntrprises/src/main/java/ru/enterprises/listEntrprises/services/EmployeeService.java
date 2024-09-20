package ru.enterprises.listEntrprises.services;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import ru.enterprises.listEntrprises.dto.common.CommonDto;
import ru.enterprises.listEntrprises.dto.employee.EmployeeFullRequestDto;
import ru.enterprises.listEntrprises.dto.employee.EmployeeFullResponseDto;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullRequestDto;
import ru.enterprises.listEntrprises.entity.employee.Employee;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;
import ru.enterprises.listEntrprises.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private ConversionService conversionService;

    public List<EmployeeFullResponseDto> findAll() {
        return repository
                .findAllByemDeleteDateIsNull()
                .stream()
                .map(item -> conversionService
                .convert(item, EmployeeFullResponseDto.class))
                .collect(Collectors.toList());
    }

    public EmployeeFullResponseDto saveEmployee(EmployeeFullRequestDto dto) {
        Employee employee = conversionService.convert(dto, Employee.class);
        Employee result = repository.save(employee);
        return conversionService.convert(result, EmployeeFullResponseDto.class);
    }

    public List<EmployeeFullResponseDto> findAllById(EnterpriseFullRequestDto entId) {
        Enterprises enterprises = conversionService.convert(entId, Enterprises.class);

        return repository
                .findAllByemEIdAndEmDeleteDateIsNull(enterprises)
                .stream()
                .map(item -> conversionService
                .convert(item, EmployeeFullResponseDto.class))
                .collect(Collectors.toList());
    }
}
