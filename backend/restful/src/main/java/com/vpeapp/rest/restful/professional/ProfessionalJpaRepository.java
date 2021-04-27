package com.vpeapp.rest.restful.professional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfessionalJpaRepository extends JpaRepository<Professional, Long>{
	Professional findById(long id);
}
