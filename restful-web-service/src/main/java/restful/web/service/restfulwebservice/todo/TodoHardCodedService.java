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

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if (todo==null) return null;

        todos.remove(todo);

        return todo;
    }

    public Todo findById(long id) {
        for (Todo todo: todos) {
            if (todo.getId()==id) {
                return todo;
            }
        }

        return null;
    }

    public Todo save(Todo todo) {
        if (todo.getId()==-1 || todo.getId()==0) {
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }

        return todo;
    }
}
