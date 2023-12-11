package com.alumnosvista2.alumnosvista2.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alumnosvista2.alumnosvista2.interfazService.IAlumnoInterfaz;
import com.alumnosvista2.alumnosvista2.model.Alumno;
import com.alumnosvista2.alumnosvista2.repository.IAlumnoRepo;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AlumnoController {
	@Autowired
	private IAlumnoInterfaz service;
	@Autowired
	private IAlumnoRepo repo;
	
	/*@GetMapping("/")
	public String inicio(Model model){
		List <Alumno> alumno = service.listar();
		model.addAttribute("alumnos",alumno);
		return "index";
	}
	
	@GetMapping("/listar")
	public String listar(Model model){
		List <Alumno> alumno = service.listar();
		model.addAttribute("alumnos",alumno);
		return "index";
	}
	@GetMapping("/agregar")
	public String add(Model model) {
		model.addAttribute("alumno",new Alumno());
		return "form";
	}
	@GetMapping("/del/{id}")
	public String del(Model model,@PathVariable int id) {
		service.delete(id);
		return "redirect:/listar";
	}
	@GetMapping("/editar/{id}")
	public String edit(@PathVariable int id, Model model) {
		Optional<Alumno>alumno= service.listarId(id);
		model.addAttribute("alumno",alumno);
		return "form";
	}
	@PostMapping("/save")
	public String save (@Validated Alumno p,Model model) {
		service.save(p);
		List<Alumno>alumnos=service.listar();
		model.addAttribute("alumnos",alumnos);
		return "form";
	}*/
	@GetMapping("/alumnos")
	public ResponseEntity<List<Alumno>> getAllAlumnos(@RequestParam(required = false) String title) {
		try {
			List<Alumno> alumnos = new ArrayList<Alumno>();
 
			if (title == null)
				service.sales().forEach(alumnos::add);
			else
				//alumnosRepository.findByTitleContaining(title).forEach(tutorials::add);
 
			if (alumnos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
 
			return new ResponseEntity<>(alumnos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/alumnos/{id}")
	public ResponseEntity<Alumno> getAlumnosById(@PathVariable int id, Model model) {
	    Optional<Alumno> alumno = service.listarId(id);
	    return alumno.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
	            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	@PostMapping("/alumnos/create")
	public ResponseEntity<?> create(@RequestBody Alumno alumno){
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(alumno));
	}
	@PutMapping("/alumnos/{id}")
	public ResponseEntity<Alumno> updateAlumnos(@PathVariable int id, @RequestBody Alumno alumnos) {
		Optional<Alumno> alumnosData = repo.findById(id);
 
		if (alumnosData.isPresent()) {
			Alumno _alumnos = alumnosData.get();
			_alumnos.setNombre(alumnos.getNombre());
			_alumnos.setEmail(alumnos.getEmail());
			return new ResponseEntity<>(repo.save(_alumnos), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/alumnos/{id}")
	public ResponseEntity<HttpStatus> deleteAlumnos(@PathVariable int id) {
		try {
			repo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    
}

