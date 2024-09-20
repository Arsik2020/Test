package ru.enterprises.listEntrprises.dto.enterprises;

import java.util.Date;

public class EnterpriseFullResponseDto extends EnterpriseFullRequestDto {

    public EnterpriseFullResponseDto() {
    }

    public EnterpriseFullResponseDto(String id) {
        super(id);
    }

    public EnterpriseFullResponseDto(String name, Date deleteDate, String id) {
        super(name, deleteDate, id);
    }

    
    private int count;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

}
