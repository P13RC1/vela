import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class UsuarioController {
 
    @Autowired
    private UsuarioService usuarioService;
 
    @GetMapping("/entrar")
    public String entrar() {
        usuarioService.registrarEntrada();
        return "Bem-vindo à loja!";
    }
}