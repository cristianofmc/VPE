package com.vpeapp.rest.restful.bound;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vpeapp.rest.restful.establishment.Establishment;
import com.vpeapp.rest.restful.professional.Professional;

@Repository
public interface BoundJpaRepository extends JpaRepository<Bound, Long>{
	List<Bound> findByEstablishment(Establishment establishment);
	List<Bound> findByProfessional(Professional professional);
	List<Bound> findByestablishmentAndProfessional(Establishment establishment, Professional professional);
}
