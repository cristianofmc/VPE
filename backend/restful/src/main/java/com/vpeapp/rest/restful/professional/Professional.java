package com.vpeapp.rest.restful.professional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Professional {

	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	private String address;
	private String cellPhone;
	private String homePhone;
	private String currentFunction;
	
	protected Professional() {	}

	public Professional(Long id, String name, String address, String cellPhone, String homePhone, String currentFunction) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.cellPhone = cellPhone;
		this.homePhone = homePhone;
		this.currentFunction = currentFunction;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCellPhone() {
		return cellPhone;
	}

	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}

	public String getHomePhone() {
		return homePhone;
	}

	public void setHomePhone(String homePhone) {
		this.homePhone = homePhone;
	}

	public String getCurrentFunction() {
		return currentFunction;
	}

	public void setCurrentFunction(String function) {
		this.currentFunction = function;
	}
	
}
