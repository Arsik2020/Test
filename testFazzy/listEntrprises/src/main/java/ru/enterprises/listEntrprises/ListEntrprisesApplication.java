package ru.enterprises.listEntrprises;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.support.GenericConversionService;

@SpringBootApplication
public class ListEntrprisesApplication {

    public static void main(String[] args) {
        SpringApplication.run(ListEntrprisesApplication.class, args);
    }

    @Bean(name = "conversionService")
    public ConversionService getConversionService() {
        GenericConversionService genericConversionService = new GenericConversionService();
        return genericConversionService;
    }
}
