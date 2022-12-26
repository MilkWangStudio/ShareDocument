package com.example.demo.domain;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TodoRepository {
    private final List<TodoItem> todoList = new ArrayList<>();

    public TodoRepository() {
        todoList.add(new TodoItem(1, "买文具", "未完成"));
        todoList.add(new TodoItem(2, "写作业", "未完成"));
        todoList.add(new TodoItem(3, "做饭", "未完成"));
        todoList.add(new TodoItem(4, "打游戏", "已完成"));
    }

    public TodoItem getTodoItem(Integer id) {
        return todoList.stream().filter(item -> item.getId().equals(id)).findAny().orElse(null);
    }

    public List<TodoItem> getTodoList() {
        return todoList;
    }

}
