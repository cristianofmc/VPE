package com.vpeapp.rest.restful.bound;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.vpeapp.rest.restful.establishment.Establishment;
import com.vpeapp.rest.restful.establishment.EstablishmentJpaRepository;
import com.vpeapp.rest.restful.professional.Professional;
import com.vpeapp.rest.restful.professional.ProfessionalJpaRepository;



@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BoundJpaResource {
	
	@Autowired
	private EstablishmentJpaRepository establishmentJpaRepository;
	
	@Autowired
	private ProfessionalJpaRepository professionalJpaRepository;
	
	@Autowired
	private BoundJpaRepository boundJpaRepository;
	
	
	
	@GetMapping("/jpa/bounds")
	public List<Bound> getAllBound(){
		
		return boundJpaRepository.findAll();
	}
	
	@GetMapping("/jpa/bounds/establishments/{id}")
	public List<Bound> getBoundEstablishment(@PathVariable long id){
		
		Establishment establishment = establishmentJpaRepository.findById(id);
		List<Bound> list_bound = boundJpaRepository.findByEstablishment(establishment);
			
		return list_bound;
	}
	
	@GetMapping("/jpa/bounds/professionals/{id}")
	public List<Bound> getBoundProfessional(@PathVariable long id){
		
		Professional professional = professionalJpaRepository.findById(id);
		List<Bound> list_bound = boundJpaRepository.findByProfessional(professional);
		return list_bound;
	}
	
	@DeleteMapping("/jpa/bounds/{id}")
	public ResponseEntity<Void> deleteBound(@PathVariable long id){
		
		//bound bound = boundService.deleteById(id);
		boundJpaRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	
	@PostMapping("/jpa/bounds")
	public ResponseEntity<Void> createTodo( @RequestBody Bound bound){
		
		List<Bound> result = boundJpaRepository.findByestablishmentAndProfessional(bound.getEstablishment(), bound.getProfessional());
			if(result.size() != 0) {
				return ResponseEntity.noContent().build();
			}

		Bound createdBound = boundJpaRepository.save(bound);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdBound.getId()).toUri();

		return ResponseEntity.created(uri).build();
	}
	
}
