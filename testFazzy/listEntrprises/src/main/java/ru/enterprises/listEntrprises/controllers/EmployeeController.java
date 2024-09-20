package ru.enterprises.listEntrprises.controllers;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.enterprises.listEntrprises.dto.common.CommonDto;
import ru.enterprises.listEntrprises.dto.employee.EmployeeFullRequestDto;
import ru.enterprises.listEntrprises.dto.employee.EmployeeFullResponseDto;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullRequestDto;
import ru.enterprises.listEntrprises.services.EmployeeService;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    private final String restPath = "/empl";

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(restPath)
    public List<EmployeeFullResponseDto> findAll() {
        return service.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/empId")
    public List<EmployeeFullResponseDto> findAllById(@RequestBody EnterpriseFullRequestDto entId) {
        return service.findAllById(entId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/add")
    public EmployeeFullResponseDto save(@RequestBody EmployeeFullRequestDto dto) {
        return service.saveEmployee(dto);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/update")
    public EmployeeFullResponseDto updte(@RequestBody EmployeeFullRequestDto dto) {
        return service.saveEmployee(dto);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/delete")
    public EmployeeFullResponseDto delete(@RequestBody EmployeeFullRequestDto dto) {
        dto.setDeleteDate(new Date());
        return service.saveEmployee(dto);
    }

}
