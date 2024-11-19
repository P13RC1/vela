import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
@Service
public class UsuarioService {
 
    @Autowired
    private UsuarioRepository usuarioRepository;
 
    public void registrarEntrada() {
        Usuario usuario = new Usuario();
        usuario.setEntrada(new Date());
        usuarioRepository.save(usuario);
    }
}
