package interfazService;

import java.util.List;
import java.util.Optional;

import com.docentes.model.Docente;

public interface IDocenteService {
	public List <Docente> listardocentes();
	public Optional <Docente> editarId(int id);
	public int save (Docente D);
	public void deleter(int id);
	public List<Docente> sale();
}
