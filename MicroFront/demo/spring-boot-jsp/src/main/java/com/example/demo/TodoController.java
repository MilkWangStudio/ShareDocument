package com.example.demo;

import com.example.demo.domain.TodoItem;
import com.example.demo.domain.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("/list")
    public ModelAndView todoList() {
        ModelAndView view = new ModelAndView();
        view.addObject("todoList", todoRepository.getTodoList());
        view.setViewName("list");
        return view;
    }

    @GetMapping("/detail")
    public ModelAndView detail(@RequestParam Integer id) {
        ModelAndView view = new ModelAndView();
        view.addObject("detail", todoRepository.getTodoItem(id));
        view.setViewName("detail");
        return view;
    }
}
