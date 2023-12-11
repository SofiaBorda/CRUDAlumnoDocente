package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.docentes.model.Docente;

@Repository
public interface IDocente extends CrudRepository<Docente, Integer>{
 
}
