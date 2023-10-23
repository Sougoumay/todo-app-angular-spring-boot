package spring.boot.learnspringboot.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.boot.learnspringboot.modeles.Course;

import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController {

    // Return list of Course : id, name, author
    @RequestMapping("/courses")
    public List<Course> getCourses()
    {
        return Arrays.asList(
                new Course(1, "Learn Angular","HAMID"),
                new Course(2, "Learn Java","SOUGOUMA"),
                new Course(3, "Learn PHP","ISSA"),
                new Course(4, "Learn SpringBoot","ADOUM"),
                new Course(5, "Learn Azure","YAYA")
        );
    }
}
