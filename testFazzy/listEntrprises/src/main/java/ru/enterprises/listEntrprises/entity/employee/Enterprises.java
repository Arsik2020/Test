package ru.enterprises.listEntrprises.entity.employee;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "enterprises", schema = "data")
@NamedQueries({
    @NamedQuery(name = "Enterprises.findAll", query = "SELECT e FROM Enterprises e"),
    @NamedQuery(name = "Enterprises.findByEId", query = "SELECT e FROM Enterprises e WHERE e.eId = :eId"),
    @NamedQuery(name = "Enterprises.findByEName", query = "SELECT e FROM Enterprises e WHERE e.eName = :eName"),
    @NamedQuery(name = "Enterprises.findByEDeleteDate", query = "SELECT e FROM Enterprises e WHERE e.eDeleteDate = :eDeleteDate")})
public class Enterprises implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "e_id")
    private String eId;
    @Column(name = "e_name")
    private String eName;
    @Column(name = "e_delete_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date eDeleteDate;
    @OneToMany(mappedBy = "emEId",cascade = CascadeType.ALL)
    private List<Employee> employeeCollection;

    public Enterprises() {
    }

    public Enterprises(String eId) {
        this.eId = eId;
    }

    public String getEId() {
        return eId;
    }

    public void setEId(String eId) {
        this.eId = eId;
    }

    public String getEName() {
        return eName;
    }

    public void setEName(String eName) {
        this.eName = eName;
    }

    public Date getEDeleteDate() {
        return eDeleteDate;
    }

    public void setEDeleteDate(Date eDeleteDate) {
        this.eDeleteDate = eDeleteDate;
    }

    public List<Employee> getEmployeeCollection() {
        return employeeCollection;
    }

    public void setEmployeeCollection(List<Employee> employeeCollection) {
        this.employeeCollection = employeeCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (eId != null ? eId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Enterprises)) {
            return false;
        }
        Enterprises other = (Enterprises) object;
        if ((this.eId == null && other.eId != null) || (this.eId != null && !this.eId.equals(other.eId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ru.enterprises.listEntrprises.entity.employee.Enterprises[ eId=" + eId + " ]";
    }

}
