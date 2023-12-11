package com.alumnosvista2.alumnosvista2.interfazService;

import java.util.List;
import java.util.Optional;

import com.alumnosvista2.alumnosvista2.model.Alumno;

public interface IAlumnoInterfaz {
	public List<Alumno>listar();
	public Optional<Alumno> listarId(int id);
	public int save(Alumno p);
	public void delete(int id);
	public List<Alumno>sales();
	
}
