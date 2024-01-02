package or.ga.customerservice.service;


import org.springframework.stereotype.Service;

import or.ga.customerservice.entity.Customer;

import java.util.Arrays;
import java.util.List;

@Service
public class CustomerService {

    public List<Customer> genererListeCustomers() {
        Customer customer1 = new Customer("BIBANG", "Garcin", 25);
        Customer customer2 = new Customer("NDONG", "Vianney", 30);
        Customer customer3 = new Customer("IWANGOU", "Jerry", 22);
        return Arrays.asList(customer1, customer2, customer3);
    }
    
}
