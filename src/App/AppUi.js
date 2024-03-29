import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoBotton } from '../TodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import { TodoContext } from '../TodoContext';

function AppUi (){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
   }=React.useContext(TodoContext); 
    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
          {loading && (
            <>
              <TodosLoading/>
              <TodosLoading/>
              <TodosLoading/>
            </>
          )}
          {error && <TodosError/>}
          {!loading && searchedTodos.length ===0 && <EmptyTodos/>}
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
          </TodoList>
          <TodoBotton/>
          
        </>
    )
    }
export {AppUi}