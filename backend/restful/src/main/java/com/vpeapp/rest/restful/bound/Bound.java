package com.vpeapp.rest.restful.bound;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.vpeapp.rest.restful.establishment.Establishment;
import com.vpeapp.rest.restful.professional.Professional;

@Entity
public class Bound {

	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
    @JoinColumn(name="establishmentID", nullable = false)
    private Establishment establishment;
    
	@ManyToOne
    @JoinColumn(name="professionalID", nullable = false)
    private Professional professional;
    
    protected Bound() {	}

	public Bound(Long id, Establishment establishment, Professional professional) {
		super();
		this.id = id;
		this.establishment = establishment;
		this.professional = professional;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Establishment getEstablishment() {
		return establishment;
	}

	public void setEstablishment(Establishment establishment) {
		this.establishment = establishment;
	}

	public Professional getProfessional() {
		return professional;
	}

	public void setProfessional(Professional professional) {
		this.professional = professional;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((establishment == null) ? 0 : establishment.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((professional == null) ? 0 : professional.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Bound other = (Bound) obj;
		if (establishment == null) {
			if (other.establishment != null)
				return false;
		} else if (!establishment.equals(other.establishment))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (professional == null) {
			if (other.professional != null)
				return false;
		} else if (!professional.equals(other.professional))
			return false;
		return true;
	}
    
	
    
}
