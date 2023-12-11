package com.docentes.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="docentes")
public class Docente {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("id")
	private int id;
	@JsonProperty("nombres")	
	private String nombres;
	@JsonProperty("correo")
	private String correo;
	@JsonProperty("direccion")
	private String direccion;	
	@JsonProperty("celular")
	private String celular;	
	@JsonProperty("materia")
	private String materia;
	
	
	public Docente() {
		super();
	}
	public Docente(int id, String nombres, String correo, String direccion, String celular, String materia) {
		super();
		this.id = id;
		this.nombres = nombres;
		this.correo = correo;
		this.direccion = direccion;
		this.celular = celular;
		this.materia = materia;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public String getMateria() {
		return materia;
	}
	public void setMateria(String materia) {
		this.materia = materia;
	}
	
	
}
