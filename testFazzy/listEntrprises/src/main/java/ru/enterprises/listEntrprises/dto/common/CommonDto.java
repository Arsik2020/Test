package ru.enterprises.listEntrprises.dto.common;

import java.util.Objects;

public class CommonDto {

    private String id;

    public CommonDto() {
    }

    public CommonDto(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final CommonDto other = (CommonDto) obj;
        return Objects.equals(this.id, other.id);
    }

    @Override
    public String toString() {
        return "CommonDto{" + "id=" + id + '}';
    }

}
