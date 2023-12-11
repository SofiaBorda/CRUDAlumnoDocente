package com.alumnosvista2.alumnosvista2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alumnosvista2.alumnosvista2.model.Alumno;

@Repository
public interface IAlumnoRepo extends CrudRepository<Alumno,Integer>{
	

}
