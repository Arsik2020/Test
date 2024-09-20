package ru.enterprises.listEntrprises.controllers;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullRequestDto;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullResponseDto;
import ru.enterprises.listEntrprises.services.EnterpriseService;

@RestController
public class EnterpriseController {

    @Autowired
    private EnterpriseService service;

    private final String restPath = "/ent";

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(restPath)
    public List<EnterpriseFullResponseDto> findAll() {
        return service.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/add")
    public EnterpriseFullResponseDto save(@RequestBody EnterpriseFullRequestDto dto) {
        return service.saveEnterprises(dto);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/update")
    public EnterpriseFullResponseDto update(@RequestBody EnterpriseFullRequestDto dto) {
        return service.saveEnterprises(dto);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(restPath + "/delete")
    public EnterpriseFullResponseDto delete(@RequestBody EnterpriseFullRequestDto dto) {
        dto.setDeleteDate(new Date());
        return service.saveEnterprises(dto);
    }
}
