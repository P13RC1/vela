import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;
 
@Entity
public class Usuario {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date entrada;
 
    // Getters e setters
    public Long getId() {
        return id;
    }
 
    public void setId(Long id) {
        (link unavailable) = id;
    }
 
    public Date getEntrada() {
        return entrada;
    }
 
    public void setEntrada(Date entrada) {
        this.entrada = entrada;
    }
}

