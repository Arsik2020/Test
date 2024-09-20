package ru.enterprises.listEntrprises.entity.employee;

import java.io.Serializable;
import java.util.Date;
import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "employee", schema = "data")
@NamedQueries({
    @NamedQuery(name = "Employee.findAll", query = "SELECT e FROM Employee e"),
    @NamedQuery(name = "Employee.findByEmId", query = "SELECT e FROM Employee e WHERE e.emId = :emId"),
    @NamedQuery(name = "Employee.findByEmFirstName", query = "SELECT e FROM Employee e WHERE e.emFirstName = :emFirstName"),
    @NamedQuery(name = "Employee.findByEmSurname", query = "SELECT e FROM Employee e WHERE e.emSurname = :emSurname"),
    @NamedQuery(name = "Employee.findByEmLastName", query = "SELECT e FROM Employee e WHERE e.emLastName = :emLastName"),
    @NamedQuery(name = "Employee.findByEmPost", query = "SELECT e FROM Employee e WHERE e.emPost = :emPost"),
    @NamedQuery(name = "Employee.findByEmDeleteDate", query = "SELECT e FROM Employee e WHERE e.emDeleteDate = :emDeleteDate")})
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "em_id")
    private String emId;
    @Column(name = "em_first_name")
    private String emFirstName;
    @Column(name = "em_surname")
    private String emSurname;
    @Column(name = "em_last_name")
    private String emLastName;
    @Column(name = "em_post")
    private String emPost;
    @Column(name = "em_delete_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date emDeleteDate;
    @JoinColumn(name = "em_e_id", referencedColumnName = "e_id")
    @ManyToOne(cascade = CascadeType.ALL)
    private Enterprises emEId;

    public Employee() {
    }

    public Employee(String emId) {
        this.emId = emId;
    }

    public String getEmId() {
        return emId;
    }

    public void setEmId(String emId) {
        this.emId = emId;
    }

    public String getEmFirstName() {
        return emFirstName;
    }

    public void setEmFirstName(String emFirstName) {
        this.emFirstName = emFirstName;
    }

    public String getEmSurname() {
        return emSurname;
    }

    public void setEmSurname(String emSurname) {
        this.emSurname = emSurname;
    }

    public String getEmLastName() {
        return emLastName;
    }

    public void setEmLastName(String emLastName) {
        this.emLastName = emLastName;
    }

    public String getEmPost() {
        return emPost;
    }

    public void setEmPost(String emPost) {
        this.emPost = emPost;
    }

    public Date getEmDeleteDate() {
        return emDeleteDate;
    }

    public void setEmDeleteDate(Date emDeleteDate) {
        this.emDeleteDate = emDeleteDate;
    }

    public Enterprises getEmEId() {
        return emEId;
    }

    public void setEmEId(Enterprises emEId) {
        this.emEId = emEId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (emId != null ? emId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Employee)) {
            return false;
        }
        Employee other = (Employee) object;
        if ((this.emId == null && other.emId != null) || (this.emId != null && !this.emId.equals(other.emId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ru.enterprises.listEntrprises.entity.employee.Employee[ emId=" + emId + " ]";
    }

}
