package com.example.demo;

import com.example.demo.domain.TodoItem;
import com.example.demo.domain.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class TodoApiController {
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("/list")
    public List<TodoItem> getTodoList() {
        return todoRepository.getTodoList();
    }

    @GetMapping("/detail")
    public TodoItem getTodo(@RequestParam Integer id) {
        return todoRepository.getTodoItem(id);
    }
}
