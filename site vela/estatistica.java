import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class EstatisticaController {
 
    @Autowired
    private UsuarioRepository usuarioRepository;
 
    @GetMapping("/estatisticas")
    public String getEstatisticas() {
        Long totalUsuarios = usuarioRepository.count();
        return "Total de usuários: " + totalUsuarios;
    }
}