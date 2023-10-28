package restful.web.service.restfulwebservice.hello;

import org.springframework.web.bind.annotation.*;
import restful.web.service.restfulwebservice.hello.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @RequestMapping(method = RequestMethod.GET,path = "/hello-world")
    public String helloWorld() {
        return "Hello-World";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World Bean");
    }

    @GetMapping(path = "/hello-world-bean-with-path-variable/{name}")
    public HelloWorldBean helloWorldBeanWithPathVariable(@PathVariable String name) {
        return new HelloWorldBean("Hello World Bean " + name);
    }
}
