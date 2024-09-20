package ru.enterprises.listEntrprises.dto.enterprises;

import java.util.Date;
import ru.enterprises.listEntrprises.dto.common.CommonDto;

public class EnterpriseFullRequestDto extends CommonDto {

    private String name;
    private Date deleteDate;

    public EnterpriseFullRequestDto(String id) {
        super(id);
    }

    public EnterpriseFullRequestDto() {
    }
    
    public EnterpriseFullRequestDto(String name, Date deleteDate, String id) {
        super(id);
        this.name = name;
        this.deleteDate = deleteDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDeleteDate() {
        return deleteDate;
    }

    public void setDeleteDate(Date deleteDate) {
        this.deleteDate = deleteDate;
    }

    @Override
    public String toString() {
        return super.toString() + "name=" + name + ", deleteDate=" + deleteDate + '}';
    }

}
