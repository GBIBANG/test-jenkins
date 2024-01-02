package or.ga.customerservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import or.ga.customerservice.entity.Customer;
import or.ga.customerservice.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerCcontroller {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/customers")
    public List<Customer> getListeCustomers() {
        return customerService.genererListeCustomers();
    }
    
}
