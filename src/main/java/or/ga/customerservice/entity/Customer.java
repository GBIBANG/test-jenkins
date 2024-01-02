package or.ga.customerservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Customer {

    private String nom;
    private String prenom;
    private int age;
}
