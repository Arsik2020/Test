package ru.enterprises.listEntrprises.dto.employee;

import java.util.Date;
import ru.enterprises.listEntrprises.dto.common.CommonDto;
import ru.enterprises.listEntrprises.dto.enterprises.EnterpriseFullResponseDto;

public class EmployeeFullRequestDto extends CommonDto {

    public EmployeeFullRequestDto() {
    }

    private String name;
    private String surname;
    private String lastname;
    private String post;
    private EnterpriseFullResponseDto enterpriceId;
    private Date deleteDate;

    public EmployeeFullRequestDto(String id) {
        super(id);
    }

    public EmployeeFullRequestDto(
            String name,
            String surname,
            String lastname,
            String post,
            EnterpriseFullResponseDto enterpriceId,
            Date deleteDate) {
        this.name = name;
        this.surname = surname;
        this.lastname = lastname;
        this.post = post;
        this.enterpriceId = enterpriceId;
        this.deleteDate = deleteDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public EnterpriseFullResponseDto getEnterpriceId() {
        return enterpriceId;
    }

    public void setEnterpriceId(EnterpriseFullResponseDto enterpriceId) {
        this.enterpriceId = enterpriceId;
    }

    public Date getDeleteDate() {
        return deleteDate;
    }

    public void setDeleteDate(Date deleteDate) {
        this.deleteDate = deleteDate;
    }

    @Override
    public String toString() {
        return super.toString() + "name=" + name + ", surname=" + surname + ", lastname=" + lastname + ", post=" + post + ", enterpriceId=" + enterpriceId + '}';
    }

}
