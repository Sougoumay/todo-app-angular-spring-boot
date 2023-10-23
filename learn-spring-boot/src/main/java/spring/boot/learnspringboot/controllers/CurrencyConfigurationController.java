package spring.boot.learnspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.boot.learnspringboot.modeles.Course;
import spring.boot.learnspringboot.services.CurrencyConfigurationService;

import java.util.Arrays;
import java.util.List;

@RestController
public class CurrencyConfigurationController {

    @Autowired
    private CurrencyConfigurationService configuration;
    // Return list of Course : id, name, author
    @RequestMapping("/currency-configuration")
    public CurrencyConfigurationService getConfigurationInfo()
    {
        return configuration;
    }
}
