package com.vpeapp.rest.restful.establishment;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EstablishmentJpaResource {
	
	
	@Autowired
	private EstablishmentJpaRepository establishmentJpaRepository;
	
	@GetMapping("/jpa/establishments")
	public List<Establishment> getAllEstablishments(){
		
		return establishmentJpaRepository.findAll();
	}
	
	@GetMapping("/jpa/establishments/{id}")
	public Establishment getEstablishments(@PathVariable long id){
		
		return establishmentJpaRepository.findById(id);
	}
	
	@DeleteMapping("/jpa/establishments/{id}")
	public ResponseEntity<Void> deleteEstablishment(@PathVariable long id){
		
		//establishment Establishment = EstablishmentService.deleteById(id);
		establishmentJpaRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/jpa/establishments/{id}")
	public ResponseEntity<Establishment> updateEstablishment(
			@PathVariable long id, @RequestBody Establishment Establishment){
		
		Establishment EstablishmentUpdated = establishmentJpaRepository.save(Establishment);
		
		
		return new ResponseEntity <Establishment>(Establishment, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/establishments")
	public ResponseEntity<Void> createEstablishment(
			@RequestBody Establishment Establishment){
		
		Establishment createdEstablishment = establishmentJpaRepository.save(Establishment);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
			.path("/{id}").buildAndExpand(createdEstablishment.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
			
}
