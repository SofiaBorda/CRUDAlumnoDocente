package service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.docentes.model.Docente;

import interfazService.IDocenteService;
import repository.IDocente;

@Service
public class DocenteService implements IDocenteService{
	@Autowired
	private IDocente repo;

	@Override
	public List<Docente> listardocentes() {
		return (List<Docente>)repo.findAll();
	}

	@Override
	public Optional<Docente> editarId(int id) {
		return repo.findById(id);
	}

	@Override
	public int save(Docente D) {
		int res=0;
		Docente docente=repo.save(D);
		if (!docente.equals(null)) {
			res=1;
		}
		return res;
	}

	@Override
	public void deleter(int id) {
		repo.deleteById(id);
		
	}

	@Override
	public List<Docente> sale() {
		return (List<Docente>) repo.findAll();
	}
}
