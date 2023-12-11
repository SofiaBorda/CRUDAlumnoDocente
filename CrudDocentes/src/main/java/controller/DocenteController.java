package controller;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;

import com.docentes.model.Docente;

import interfazService.IDocenteService;

@Controller
@RequestMapping
public class DocenteController {
	
	@Autowired
	private IDocenteService service;
	
	@GetMapping("/listar")
	public String listar (Model model) {
		List<Docente>docentes=service.listardocentes();
		model.addAttribute("docentes", docentes);
		return "index";		
	}
	
	
}
