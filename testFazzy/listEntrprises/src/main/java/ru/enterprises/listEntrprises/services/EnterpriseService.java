package ru.enterprises.listEntrprises.services;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullRequestDto;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullResponseDto;
import ru.enterprises.listEntrprises.entity.employee.Enterprises;
import ru.enterprises.listEntrprises.repository.EnterpriseRepository;

@Service
public class EnterpriseService {

    @Autowired
    private EnterpriseRepository repository;

    @Autowired
    private ConversionService conversionService;

    public List<EnterpriseFullResponseDto> findAll() {

        List<EnterpriseFullResponseDto> response = repository
                .findAllByeDeleteDateIsNull()
                .stream()
                .map(item -> conversionService
                .convert(item, EnterpriseFullResponseDto.class))
                .collect(Collectors.toList());

        response.sort(Comparator.comparing(EnterpriseFullResponseDto::getName));

        return response;
    }

    public EnterpriseFullResponseDto saveEnterprises(EnterpriseFullRequestDto dto) {
        Enterprises enterprises = conversionService
                .convert(dto, Enterprises.class);
        Enterprises result = repository
                .save(enterprises);

        return conversionService
                .convert(result, EnterpriseFullResponseDto.class);
    }

}
