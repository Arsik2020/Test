package ru.enterprises.listEntrprises.utils;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.convert.support.GenericConversionService;

public abstract class CommonConverter<A, B> implements Converter<A, B> {

    @Autowired
    private ApplicationContext applicationContext;

    protected ConversionService conversionService;

    @PostConstruct
    public void init() {
        GenericConversionService genericConversionService = applicationContext
                .getBean("conversionService", GenericConversionService.class);
        this.conversionService = genericConversionService;
        genericConversionService.addConverter(this);
    }
}
