package restful.web.service.restfulwebservice.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Hamid","Learn Spring Boot",new Date(), false));
        todos.add(new Todo(++idCounter, "Hamid","Learn Java",new Date(), false));
        todos.add(new Todo(++idCounter, "Hamid","Learn Restful api",new Date(), false));
        todos.add(new Todo(++idCounter, "Hamid","Learn Angular",new Date(), true));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
