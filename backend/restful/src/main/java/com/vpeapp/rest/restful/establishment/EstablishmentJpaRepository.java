package com.vpeapp.rest.restful.establishment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstablishmentJpaRepository extends JpaRepository<Establishment, Long>{
	Establishment findById(long id);
}
