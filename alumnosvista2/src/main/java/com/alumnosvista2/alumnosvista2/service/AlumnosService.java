package com.alumnosvista2.alumnosvista2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alumnosvista2.alumnosvista2.interfazService.IAlumnoInterfaz;
import com.alumnosvista2.alumnosvista2.model.Alumno;
import com.alumnosvista2.alumnosvista2.repository.IAlumnoRepo;

@Service
public class AlumnosService implements IAlumnoInterfaz{
	
	@Autowired
	private IAlumnoRepo data;

	@Override
	public List<Alumno> listar() {
		return (List<Alumno>)data.findAll();
	}

	@Override
	public Optional<Alumno> listarId(int id) {
		return data.findById(id);
	}

	@Override
	public int save(Alumno p) {
		int res=0;
		Alumno alumno = data.save(p);
		if(!alumno.equals(null)) {
			res = 1;
		}
		return res;
	}

	@Override
	public void delete(int id) {
		data.deleteById(id);	
	}

	@Override
	public List<Alumno> sales() {
		return (List<Alumno>)data.findAll();
	}
	
	
	
}
