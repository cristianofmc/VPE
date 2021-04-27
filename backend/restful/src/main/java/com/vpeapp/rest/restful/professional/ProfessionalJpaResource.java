package com.vpeapp.rest.restful.professional;

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
public class ProfessionalJpaResource {
	
	
	@Autowired
	private ProfessionalJpaRepository professionalJpaRepository;
	
	@GetMapping("/jpa/professionals")
	public List<Professional> getAllprofessionals(){
		
		return professionalJpaRepository.findAll();
	}
	
	@GetMapping("/jpa/professionals/{id}")
	public Professional getprofessionals(@PathVariable long id){
		
		return professionalJpaRepository.findById(id);
	}
	
	@DeleteMapping("/jpa/professionals/{id}")
	public ResponseEntity<Void> deleteprofessional(
				@PathVariable long id){
		
		professionalJpaRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/jpa/professionals/{id}")
	public ResponseEntity<Professional> updateprofessional(
			@PathVariable long id, @RequestBody Professional professional){
		
		Professional professionalUpdated = professionalJpaRepository.save(professional);
		
		
		return new ResponseEntity <Professional>(professional, HttpStatus.OK);
	}
		
	@PostMapping("/jpa/professionals")
	public ResponseEntity<Void> createprofessional(
			@RequestBody Professional professional){
		
		Professional createdprofessional = professionalJpaRepository.save(professional);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
			.path("/{id}").buildAndExpand(createdprofessional.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
			
}
